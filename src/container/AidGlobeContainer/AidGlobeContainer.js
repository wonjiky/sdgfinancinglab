import React, { Component } from 'react';
import ContainerLayout from '../../component/Layout/ContainerLayout/ContainerLayout';
import AidGlobeParams from '../../component/AidGlobeParams/AidGlobeParams';
import GlobeViz from '../../component/Visualisations/Globe/Globe';

class AidGlobeContainer extends Component {

    state = {
        distributionType: 'donor'
    }
    
    donorRecipientHanlder = (e) => {
        this.setState({ distributionType: e.target.dataset.value });
    }

    render() {
        return (
            <ContainerLayout type='AidGlobeParamsStyle'>
                <AidGlobeParams donorRecipientHanlder={this.donorRecipientHanlder} distributionType={this.state.distributionType} />
                <GlobeViz/>
            </ContainerLayout>
        )
    }
};

export default AidGlobeContainer;