import React, { Component } from 'react';
import ContainerLayout from '../../component/Layout/ContainerLayout/ContainerLayout';
import ExploreParams from '../../component/ExploreParams/ExploreParams';
import VisualisationWrapper from '../../component/Visualisations/VisualisationWrapper/VisualisationWrapper';
import ParamsLabeling from '../../json/ParamsLabeling';
import DonorList from '../../json/donors/DonorList';
import RecipientList from '../../json/recipients/RecipientList';
import { thisExpression } from '@babel/types';

// const flowTypeList = [ 
//     { value: 'ODA' , label: 'ODA' }, 
//     { value: 'OOF', label: 'OOF' },
//     { value: 'Private Grants', label: 'Private Grants' },
//     { value: 'Other Private Flow', label: 'Other Private Flow' },
//     { value: 'Non flow', label: 'Non flow' },
// ];


const flowTypes = [];
flowTypes.category = [
    { value: 'ODA', label: 'ODA' },
    { value: 'OOF', label: 'OOF' },
    { value: 'Private Grants', label: 'Private Grants' },
    { value: 'Other Private Flow', label: 'Other Private Flow' },
    { value: 'Non flow', label: 'Non flow' }
];

flowTypes.finance = [
    { value: 'Commitment', label: 'Commitment'},
    { value: 'Disbursement', label: 'Disbursement' }
];
    
class ExploreContainer extends Component {

    state = {
        data: [],
        treemapData: [],
        countryList: DonorList,
        distributionType: 'donors',
        firstSelectedCountry: { value: 'France', label: 'France' },
        secondSelectedCountry: { value: 'All Recipients', label: 'All Recipients', }, 
        financeFlow: { value: 'Commitment', label: 'Commitment' },
        flowType: flowTypes.category,
    }

    componentDidMount() {
        this.import('donors', 'France');
    }

    componentDidUpdate(prevProps, prevState) {
        if ( prevState.firstSelectedCountry !== this.state.firstSelectedCountry ) {
            this.import( this.state.distributionType, this.state.firstSelectedCountry.value );
            if ( this.state.distributionType === 'donors') {
                this.setState( { secondSelectedCountry: {  value: 'All Recipients', label: 'All Recipients' } });
            }else if ( this.state.distributionType === 'recipients' ) {
                this.setState( { secondSelectedCountry: { value: 'All Donors', label: 'All Donors' } });
            }
        }
        
        if ( prevState.secondSelectedCountry !== this.state.secondSelectedCountry ) {
            this.updateTreemapData(this.state.data);
        }
        
        if ( prevState.secondSelectedCountry !== this.state.secondSelectedCountry
            && this.state.secondSelectedCountry.value === ('All Recipients' || 'All Donors') ) {
                this.import( this.state.distributionType, this.state.firstSelectedCountry.value );
                this.updateTreemapData(this.state.data);
            }

        if( prevState.flowType !== this.state.flowType ) {
            this.updateTreemapData(this.state.data)
        }

        if ( prevState.financeFlow !== this.state.financeFlow) {
            this.updateTreemapData(this.state.data);
        }

        if ( prevState.distributionType !== this.state.distributionType ) {
            this.updateDistributionType(this.state.distributionType);
        }
    } 

    async import(type, country) {
        let data = await require(`../../json/${type}/${country}.json`);
        await this.setState({ data });
        await this.updateTreemapData(data);
    }

    updateDistributionType = ( value ) => {
        if( value === 'recipients') {
            this.import(this.state.distributionType, 'Ethiopia');
            this.setState({ 
                countryList: RecipientList, 
                firstSelectedCountry: { value: 'Ethiopia', label: 'Ethiopia' }, 
                secondSelectedCountry: { value: 'All Donors', label: 'All Donors' } 
            });
        } else if ( value === 'donors' ) {
            this.import(this.state.distributionType, 'France');
            this.setState({ 
                countryList: DonorList,
                firstSelectedCountry: { value: 'France', label: 'France' }, 
                secondSelectedCountry: { value: 'All Recipients', label: 'All Recipients' } 
            });
        }
    }

    updateTreemapData = ( data ) => {
        let oldData = [ ...data ];
        
        if( this.state.distributionType === 'donors' ){
            let secondCountryFiltered = oldData.filter(el => el.RecipientName === this.state.secondSelectedCountry.value);
            if( this.state.secondSelectedCountry.value === ('All Recipients') ) {
                secondCountryFiltered = oldData;
            }
            this.filterTreemapData(secondCountryFiltered);
        }else if ( this.state.distributionType === 'recipients' ) {
            let secondCountryFiltered = oldData.filter(el => el.DonorName === this.state.secondSelectedCountry.value);
            if( this.state.secondSelectedCountry.value === ('All Donors') ) {
                secondCountryFiltered = oldData;
            }
            this.filterTreemapData(secondCountryFiltered);
        } 
    }

    filterTreemapData = ( data ) => {
        let oldFlowType = [ ...this.state.flowType ];
        let flowTypeFilter = oldFlowType.map(item => item.value);
        let flowTypeFilteredData = data.filter(item => flowTypeFilter.includes(item.Category));
        let newData = flowTypeFilteredData.filter(el => el.TypeFlow === this.state.financeFlow.value);
        this.setState({ treemapData: newData });
    }
    firstSelectorHandler = ( value ) => {
        this.setState({ firstSelectedCountry: value })
    }

    secondSelectorHandler = ( value ) => {
        this.setState({ secondSelectedCountry: value })
    }

    // financeFlowHandler = ( value ) => {
    //     this.setState({ financeFlow: value})
    // }
    
    flowTypeHandler = ( value, { action, removedValue}  ) => {
        if ( value.length >= 1 ) {
            this.setState({ flowType: value });
        }else{
            return;
        }
    }

    render() {
        let paramsLabel = [...ParamsLabeling];
        let data = [ ...this.state.data ];
        let topSearchBarList = this.state.countryList.map(el => ({ value: el.NAME, label: el.NAME}));
        let bottomSearchBarList = [ ...new Set(data.map(el => el.RecipientName))].sort().map(item => ({ value: item, label: item }))
        bottomSearchBarList.splice(0,0, ({ value: 'All Recipients', label: 'All Recipients' }))
        if ( this.state.distributionType === 'recipients' ) {
            bottomSearchBarList = [ ...new Set(data.map(el => el.DonorName))].sort().map(item => ({ value: item, label: item}))
            bottomSearchBarList.splice(0,0, ({ value: 'All Donors', label: 'All Donors'}))
        }
        return(
            <ContainerLayout type='ExploreParamsStyle'>
                <ExploreParams 
                    paramsLabel={paramsLabel}
                    donorList={topSearchBarList}
                    recipientList={bottomSearchBarList}
                    financeTypeList={flowTypes.finance}
                    flowTypeList={flowTypes.category}

                    firstSelectedCountry={this.state.firstSelectedCountry}
                    secondSelectedCountry={this.state.secondSelectedCountry}
                    financeFlow={this.state.financeFlow}
                    flowType={this.state.flowType}
                    distributionType={this.state.distributionType} 
                    flowTypeHandler={this.flowTypeHandler}
                    donorRecipientHanlder={this.donorRecipientHanlder = (e) => this.setState({ distributionType: e.target.dataset.value })}
                    financeFlowHandler={this.financeFlowHandler = (value) => this.setState({ financeFlow: value })}
                    firstSelectorHandler={this.firstSelectorHandler}
                    secondSelectorHandler={this.secondSelectorHandler} />
                    
                <VisualisationWrapper data={this.state.treemapData} />
            </ContainerLayout>
        );
    }
};

export default ExploreContainer;