import React from 'react';
import classes from './DistributionTypeSelector.module.css';

const distributionTypeSelector = ( props ) => {
  
    return (
        <ul className={classes.DonorRecipientSelector}>
            <li className={props.dType === 'donor' ? classes.Selected : null} onClick={props.donorRecipientSelector} data-value='donor'> Donor </li>
            <li className={props.dType === 'recipient' ? classes.Selected : null} onClick={props.donorRecipientSelector} data-value='recipient'> Recipient </li>
        </ul>
    );
};

export default distributionTypeSelector;

