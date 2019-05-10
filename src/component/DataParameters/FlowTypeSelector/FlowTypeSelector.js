import React from 'react';
import classes from './FlowTypeSelector.module.css';
import Selector from '../Selector/Selector';

const styles = {
    multiValue: (base, state) => {
        return state.data.isFixed ? { ...base, backgroundColor: 'gray' } : base;
    },
    multiValueLabel: (base, state) => {
        return state.data.isFixed ? { ...base, fontWeight: 'bold', color: 'white', paddingRight: 6 } : base;
    },
    multiValueRemove: (base, state) => {
        return state.data.isFixed ? { ...base, display: 'none' } : base;
    }
};
  
const flowTypeSelector = ( props ) => {
    let content = (
        <div className={classes.FlowTypeSelector}>
            <p>Type of Flow</p>
            <Selector 
                selectorType={props.paramsLabel[2].SelectorType} 
                isMulti={true}
                styles={styles}
                value={props.flowType}
                selectorHandler={props.flowTypeHandler} 
                isClearable={false}
                list={props.flowTypeList} />
        </div>
    );
    return ( content );
};

export default flowTypeSelector;