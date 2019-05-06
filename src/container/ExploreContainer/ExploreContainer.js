import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import France from '../../json/donors/France';

class ExploreContainer extends Component {
    state = {

    }
    render() {
        return(
            <Aux>
                <div>Data Param</div>
                <div>Barplot</div>
                <div>Treemap</div>
                <div>Timeline</div>
                <div>Map</div>
            </Aux>
        );
    }
};

export default ExploreContainer;