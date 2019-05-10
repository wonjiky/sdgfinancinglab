import React from 'react';
import classes from './DistributionTypeSelector.module.css';

const distributionTypeSelector = ( props ) => {
    
    return (
        <ul className={classes[props.type]}>
            <li className={props.distributionType === 'donors' ? classes.Selected : null} onClick={props.donorRecipientHanlder} data-value='donors'> Donor </li>
            <li className={props.distributionType === 'recipients' ? classes.Selected : null} onClick={props.donorRecipientHanlder} data-value='recipients'> Recipient </li>
        </ul>
    );
};

export default distributionTypeSelector;

