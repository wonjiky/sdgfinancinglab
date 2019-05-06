import React, { Component } from 'react';
// import classes from './ExploreContainer.module.css';
import ContainerLayout from '../../component/Layout/ContainerLayout/ContainerLayout';
import ExploreParams from '../../component/ExploreParams/ExploreParams';
// import France from '../../json/donors/France';

class ExploreContainer extends Component {
    state = {
        distributionType: 'donor'
    }

    donorRecipientHanlder = ( e ) => {
        this.setState({ distributionType: e.target.dataset.value });        
    }

    render() {
        return(
            <ContainerLayout type='ExploreParamsStyle'>
                <ExploreParams distributionType={this.state.distributionType} donorRecipientHanlder={this.donorRecipientHanlder}/>
                <div>Timeline</div>
                <div>Map</div>
            </ContainerLayout>
        );
    }
};

export default ExploreContainer;