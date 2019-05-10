import React from 'react';
import Selector from '../Selector/Selector';
import classes from './CountrySearchBar.module.css';

const countrySearchBar = ( props ) => {

    let content = (
        <div className={classes.CountrySearchBar}>
            <Selector 
                // selectorType={props.paramsLabel[0].SelectorType} 
                // placeHolder={props.paramsLabel[0].PlaceHolder} 
                value={props.firstSelectedCountry} 
                isMulti={false}
                list={props.donorList}
                selectorHandler={props.firstSelectorHandler} />
            <div className={classes.ArrowDown} />
            <Selector 
                // selectorType={props.paramsLabel[1].SelectorType} 
                // placeHolder={props.paramsLabel[1].PlaceHolder} 
                value={props.secondSelectedCountry} 
                isMulti={false} 
                list={props.recipientList} 
                selectorHandler={props.secondSelectorHandler} />
        </div>
        
    )

    return( content );
};

export default countrySearchBar;