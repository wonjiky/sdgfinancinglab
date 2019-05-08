import React from 'react';
import Selector from '../Selector/Selector';
import classes from './CountrySearchBar.module.css';

const countrySearchBar = ( props ) => {

    let content = (
        <div className={classes.CountrySearchBar}>
            <Selector 
                // selectorType={props.paramsLabel[0].SelectorType} 
                // placeHolder={props.paramsLabel[0].PlaceHolder} 
                // value={props.countryDisplayValue[0]} 
                isMulti={false}
                // list={props.countryList[0]}
                selectorHandler={props.firstCountrySelectorHandler} />
            <div className={classes.ArrowDown} />
            <Selector 
                // selectorType={props.paramsLabel[1].SelectorType} 
                // placeHolder={props.paramsLabel[1].PlaceHolder} 
                // value={props.countryDisplayValue[1]} 
                isMulti={false} 
                // list={props.countryList[1]} 
                selectorHandler={props.secondCountrySelectorHandler} />
        </div>
        
    )

    return( content );
};

export default countrySearchBar;