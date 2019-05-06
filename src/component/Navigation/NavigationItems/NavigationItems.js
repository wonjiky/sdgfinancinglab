import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem exact={true} link='/'>The Aid Globe</NavigationItem>
        <NavigationItem exact={false} link='/explore'>Explore</NavigationItem>
        <NavigationItem exact={false} link='/sdgranking'>SDG Ranking</NavigationItem>
        <NavigationItem exact={false} link='/testtheapi'>Test the API</NavigationItem>
        <NavigationItem exact={false} link='/faq'>FAQ</NavigationItem>
        <NavigationItem exact={false} link='/about'>About</NavigationItem>
    </ul>
);

export default navigationItems;