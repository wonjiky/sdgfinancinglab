import React from 'react';
import IntroParams from '../DataParameters/IntroParams/IntroParams';
import classes from './Intro.module.css';

const intro = ( props ) => (
    <div className={classes.Intro}>
        <section>
            <h1>The SDG Financing Lab is...</h1>
            <p>An estimate of the SDG aid financing based on the OECD-CRS. It uses artificial intelligence to track the financial flows.</p>
        </section>
        <IntroParams {...props} />
    </div>
);

export default intro;
