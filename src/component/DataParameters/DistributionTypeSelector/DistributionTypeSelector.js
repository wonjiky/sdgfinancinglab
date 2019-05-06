import React from 'react';
import classes from './DistributionTypeSelector.module.css';

const distributionTypeSelector = ( props ) => {
    
    return (
        <ul className={classes[props.type]}>
            <li className={props.distributionType === 'donor' ? classes.Selected : null} onClick={props.donorRecipientHanlder} data-value='donor'> Donor </li>
            <li className={props.distributionType === 'recipient' ? classes.Selected : null} onClick={props.donorRecipientHanlder} data-value='recipient'> Recipient </li>
        </ul>
    );
};

export default distributionTypeSelector;

