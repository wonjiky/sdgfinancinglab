import React from 'react';
import SDG_Logo from '../../assets/images/SFL_Logo.png';
import classes from './Logo.module.css';

const logo = ( props ) => (
    <div className={classes.Logo}>
        <img src={SDG_Logo} alt='The SDG Financing Lab'/>
    </div>
);

export default logo;

