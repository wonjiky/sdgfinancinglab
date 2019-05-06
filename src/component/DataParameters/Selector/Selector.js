import React from 'react';
import Select from 'react-select';
import classes from './Selector.module.css';

const selector = ( props ) => {

    let className = classes[props.selectorType];
    return (
        <Select
            placeholder={props.placeHolder}
            className={className}
            isClearable={true}
            isSearchable={true}
            // value={props.countryValue}
            // onChange={props.sendCountryValue}
            // formatGroupLabel={formatGroupLabel}
            // options={props.countryList}
            backspaceRemovesValue={false}
            theme={(theme) => ({
                ...theme,
                borderRadius: 0,
                colors: {
                ...theme.colors,
                primary25: '#4e4e4e',
                primary: '#4e4e4e',
                },
        })} />
    );

};

export default selector;