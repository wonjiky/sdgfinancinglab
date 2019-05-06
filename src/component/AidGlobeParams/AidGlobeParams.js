import React from 'react';
import AidGlobeParamsItems from './AidGlobeParamsItems/AidGlobeParamsItems';
import classes from './AidGlobeParams.module.css';

const aidGlobeParams = ( props ) => (
    <div className={classes.AidGlobeParams}>
        <section>
            <h1>The SDG Financing Lab is...</h1>
            <p>An estimate of the SDG aid financing based on the OECD-CRS. It uses artificial intelligence to track the financial flows.</p>
            <AidGlobeParamsItems {...props} type='AidGlobe' />
        </section>
    </div>
);

export default aidGlobeParams;
