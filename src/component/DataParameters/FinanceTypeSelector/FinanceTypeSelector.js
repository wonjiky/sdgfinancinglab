import React from 'react';
import Selector from '../Selector/Selector';
import classes from './FinanceTypeSelector.module.css';

const financeTypeSelector = ( props ) => {
  
    let content = (
        <div className={classes.FinanceTypeSelector}>
            <p>Type of Financial Flow</p>
            <Selector 
                selectorType={props.paramsLabel[3].SelectorType} 
                isMulti={false}
                value={props.financeFlow}
                selectorHandler={props.financeFlowHandler}
                list={props.financeTypeList} />
        </div>
    );

    return ( content );
};

export default financeTypeSelector;