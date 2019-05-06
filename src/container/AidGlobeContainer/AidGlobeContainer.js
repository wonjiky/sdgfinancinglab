import React, { Component } from 'react';
import ContainerLayout from '../../component/Layout/ContainerLayout/ContainerLayout';
import Intro from '../../component/Intro/Intro';

import GlobeViz from '../../component/Visualisations/Globe/Globe';

class AidGlobeContainer extends Component {

    state = {
        dType: 'donor'
    }
    donorRecipientSelector = (e) => {
        this.setState({ dType: e.target.dataset.value });
    }

    render() {
        return (
            <ContainerLayout type='ContainerLayout'>
                <Intro donorRecipientSelector={this.donorRecipientSelector} dType={this.state.dType} />
                <GlobeViz/>
            </ContainerLayout>
        )
    }
};

export default AidGlobeContainer;