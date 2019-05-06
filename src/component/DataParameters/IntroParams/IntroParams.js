import React from 'react';
import DistributionTypeSelector from '../DistributionTypeSelector/DistributionTypeSelector';
import Selector from '../Selector/Selector';

const introParams = ( props ) => {

    return ( 
        <div>
            <DistributionTypeSelector {...props} />
            <Selector />
        </div>    
    );
};

export default introParams;