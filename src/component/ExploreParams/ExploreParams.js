import React from 'react';
import classes from './ExploreParams.module.css';
import DistributionTypeSelector from '../DataParameters/DistributionTypeSelector/DistributionTypeSelector';

const exploreParams = ( props ) => {

    return (
        <div className={classes.ExploreParams}>
            <p>Please select a donor, a recipient, or both</p>
            <DistributionTypeSelector type='Explore' {...props} />
            
            <div>Data Param</div>
            <div>Barplot</div>
            <div>Treemap</div>
        </div>
    );
};

export default exploreParams;