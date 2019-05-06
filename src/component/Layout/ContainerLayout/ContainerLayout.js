import React from 'react';
import classes from './ContainerLayout.module.css';

const containerLayout = ( props ) => {

    let className = classes[props.type];

    return (
        <div className={className}>
            {props.children}
        </div>    
    );
};

export default containerLayout;