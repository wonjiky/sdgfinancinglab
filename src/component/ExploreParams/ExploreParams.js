import React from 'react';
import classes from './ExploreParams.module.css';
import CountrySearchBar from '../DataParameters/CountrySearchBar/CountrySearchBar';
import DistributionTypeSelector from '../DataParameters/DistributionTypeSelector/DistributionTypeSelector';
import FlowTypeSelector from '../DataParameters/FlowTypeSelector/FlowTypeSelector';
import FinanceTypeSelector from '../DataParameters/FinanceTypeSelector/FinanceTypeSelector';

const exploreParams = ( props ) => {
    let content = (
        <div className={classes.ExploreParams}>
            <p>Please select a donor, a recipient, or both</p>
            <DistributionTypeSelector type='Explore' {...props} />
            <CountrySearchBar {...props} />
            <FlowTypeSelector {...props} />
            <FinanceTypeSelector {...props} />
            
            <hr className={classes.HR}/>

            <div>Barplot</div>
            <div>Treemap</div>
        </div>
    );

    return ( content );
};

export default exploreParams;