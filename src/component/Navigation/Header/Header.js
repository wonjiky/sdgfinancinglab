import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './Header.module.css';

const header = ( props ) => (
    <header className={classes.ToolbarWrapper}>
        <div className={classes.Toolbar}>
            <Logo />
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </header>
);

export default header;