import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Toolbar.module.css';

const toolbar = ( props ) => (
    <header className={classes.ToolbarWrapper}>
        <div className={classes.Toolbar}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </header>
);

export default toolbar;