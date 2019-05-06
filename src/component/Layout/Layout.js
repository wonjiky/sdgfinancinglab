import React from 'react';
import Aux from '../../hoc/Aux';
// import PropTypes from 'prop-types';
import Header from '../Navigation/Header/Header';
import classes from './Layout.module.css';

const layout = ( props ) => (
    <Aux>
        <Header />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>    
);

// layout.propTypes = {
//     type: PropTypes.string.isRequired
// };

export default layout;