import React from 'react';
import classes from './FlowTypeSelector.module.css';
import Selector from '../Selector/Selector';

const flowTypeSelector = ( props ) => {
    let content = (
        <div className={classes.FlowTypeSelector}>
            <p>Type of Flow</p>
            <Selector 
                selectorType={props.paramsLabel[2].SelectorType} 
                placeHolder={props.paramsLabel[2].PlaceHolder} 
                isMulti={true}
                value={false}
                selectorHandler={props.flowTypeHandler} 
                defaultValue={props.flowTypeList}
                list={props.flowTypeList} />
        </div>
    );

    return ( content );
};

export default flowTypeSelector;