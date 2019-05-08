import React, { Component } from 'react';
import ContainerLayout from '../../component/Layout/ContainerLayout/ContainerLayout';
import ExploreParams from '../../component/ExploreParams/ExploreParams';
import VisualisationWrapper from '../../component/Visualisations/VisualisationWrapper/VisualisationWrapper';
import ParamsLabeling from '../../json/ParamsLabeling';

import France from '../../json/donors/France';
import Ireland from '../../json/donors/Ireland';
import Japan from '../../json/donors/Japan';
import Ethiopia from '../../json/recipients/Ethiopia';
import India from '../../json/recipients/India';
import Thailand from '../../json/recipients/Thailand';


// const countries = [].concat(...France, ...Ireland, ...Japan, ...Ethiopia, ...India, ...Thailand);
// const countryList = [
//     [...new Set(countries.map(el => el.DonorName))].sort()
//         .map(item => ( { value: item, label: item } )), 
//     [...new Set(countries.map(el => el.RecipientName))].sort()
//     .map(item => ( { value: item, label: item } ))
// ];

const flowTypeList = [ 
    { value: 'ODA' , label: 'ODA' }, 
    { value: 'OOF', label: 'OOF' },
    { value: 'Private Grants', label: 'Private Grants' }
];

const financeTypeList = [
    { value: 'Disbursement',label: 'Disbursement' },
    { value: 'Commitment', label: 'Commitment' },
];
let treemapData = [];
// let adaptation = countries.find( e => e.DonorName === 'Adaptation Fund');

class ExploreContainer extends Component {
    state = {
        data : [].concat(...France, ...Ireland, ...Japan, ...Ethiopia, ...India, ...Thailand),
        // newData: adaptation,
        distributionType: 'Donor',
        selectedDonor: { label: 'Adaptation Fund', value: 'Adaptation Fund' },
        selectedRecipient: { label: 'India', value: 'India' },
        flowType: { label: 'Commitment', value: 'Commitment' },
        financeType:  { value: 'ODA' , label: 'ODA' }
    }

    donorRecipientHanlder = ( e ) => {
        this.setState({ distributionType: e.target.dataset.value });        
    }

    firstCountrySelectorHandler = ( value ) => {
     
    }
    
    secondCountrySelectorHandler = ( value ) => {
        // this.setState({ selectedRecipient: value });
    }

    financeTypeHandler = ( value ) => {
        // this.setState({ financeType: value})
    }
    
    flowTypeHandler = ( value ) => {
        // this.setState({ flowType: value})
    }

    componentDidUpdate(prevProps, prevState) {
        // let data = [...this.state.data];
        // if(this.state.selectedDonor !== prevState.selectedDonor) {
        //     treemapData = data.filter(el => (el.DonorName === this.state.selectedDonor.value));
        //     return treemapData;
        // };

        // if(prevState.selectedRecipient !== this.state.selectedRecipient) {
        //     treemapData = data.filter(el => (el.RecipientName === this.state.selectedRecipient.value));
        //     return treemapData;
        // };

        // if(prevState.financeType !== this.state.financeType) {
        //     treemapData = data.filter(el => (el.TypeFlow === this.state.financeType.value));
        //     return treemapData;
        // }
    } 

    render() {
        let paramsLabel = [...ParamsLabeling];
        let countryDisplayValue = [this.state.selectedDonor, this.state.selectedRecipient];
 
        if( this.state.distributionType === 'Recipient' ) {
            [paramsLabel[0], paramsLabel[1]] = [paramsLabel[1], paramsLabel[0]];
            // [countryList[0], countryList[1]] = [countryList[1], countryList[0]];
        };
        console.log(treemapData)
        return(
            <ContainerLayout type='ExploreParamsStyle'>
                <ExploreParams 
                    paramsLabel={paramsLabel}
                    // // countryList={countryList}
                    // financeTypeList={financeTypeList}
                    // flowTypeList={flowTypeList}
                    // countryDisplayValue={countryDisplayValue}
                    distributionType={this.state.distributionType} 
                    donorRecipientHanlder={this.donorRecipientHanlder}
                    flowTypeHandler={this.flowTypeHandler}
                    financeTypeHandler={this.financeTypeHandler}
                    firstCountrySelectorHandler={this.firstCountrySelectorHandler}
                    secondCountrySelectorHandler={this.secondCountrySelectorHandler} />
                <VisualisationWrapper data={treemapData} />
            </ContainerLayout>
        );
    }
};

export default ExploreContainer;