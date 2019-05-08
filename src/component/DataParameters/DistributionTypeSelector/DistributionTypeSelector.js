import React from 'react';
import classes from './DistributionTypeSelector.module.css';

const distributionTypeSelector = ( props ) => {
    
    return (
        <ul className={classes[props.type]}>
            <li className={props.distributionType === 'Donor' ? classes.Selected : null} onClick={props.donorRecipientHanlder} data-value='Donor'> Donor </li>
            <li className={props.distributionType === 'Recipient' ? classes.Selected : null} onClick={props.donorRecipientHanlder} data-value='Recipient'> Recipient </li>
        </ul>
    );
};

export default distributionTypeSelector;

