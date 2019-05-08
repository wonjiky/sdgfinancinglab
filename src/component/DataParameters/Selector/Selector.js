import React from 'react';
import Select from 'react-select';
import classes from './Selector.module.css';

const selector = ( props ) => {

    let className = classes[props.selectorType];
    return (
        <Select
            placeholder={props.placeHolder}
            className={className}
            // isClearable={true}
            isSearchable={true}
            isMulti={props.isMulti}
            value={props.value}
            defaultValue={props.defaultValue}
            onChange={props.selectorHandler}
            // formatGroupLabel={formatGroupLabel}
            options={props.list}
            // backspaceRemovesValue={false}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                ...theme.colors,
                primary25: '#999999',
                primary: '#4e4e4e',
                },
        })} />
    );

};

export default selector;