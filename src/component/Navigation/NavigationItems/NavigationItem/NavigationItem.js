import React from 'react';
import classes from './NavigationItem.module.css';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';


const navigationItem = (props) => (
    // <li className='NavigationItem'>
    <li className={classes.NavigationItem}>
        <NavLink activeClassName={classes.selected} exact={props.exact} to={props.link}>{props.children}</NavLink>
    </li>
);

export default navigationItem;