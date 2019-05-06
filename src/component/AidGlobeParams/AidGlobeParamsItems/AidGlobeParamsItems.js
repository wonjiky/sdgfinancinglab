import React from 'react';
import DistributionTypeSelector from '../../DataParameters/DistributionTypeSelector/DistributionTypeSelector';
import Selector from '../../DataParameters/Selector/Selector';

const globalAidParamsItems = ( props ) => {

    return ( 
        <div>
            <DistributionTypeSelector {...props} />
            <Selector selectorType='AidGlobe_Country' placeHolder='Select a Donor...' />
            <Selector selectorType='AidGlobe_SDG' placeHolder='Select a SDG...' />
        </div>    
    );
};

export default globalAidParamsItems;