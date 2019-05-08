import React from 'react';
import Treemap from '../Treemap/Treemap';
import Timeline from '../Timeline/Timeline';
import classes from './VisualisationWrapper.module.css';
import Treemaps from '../Treemap/Treemap';

const visualisationWrapper = ( props ) => {

    let content = (
        <div className={classes.VisualisationWrapper}>
            <Treemaps data={props.data} />
            <Timeline />
        </div>
    )

    return ( content );
};

export default visualisationWrapper;