import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">NavBar</a>
                <span className='nav-link badge badge-pill badge-secondary'>
                    {props.totalCounter} item selected
                </span>
            </nav>
        </React.Fragment>
    );
}
 
export default NavBar;