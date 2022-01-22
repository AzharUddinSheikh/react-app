import React, { Component } from 'react';

const NavBar = ({totalCounter}) => {
    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">NavBar</a>
                <span className='nav-link badge badge-pill badge-secondary'>
                    {totalCounter} item selected
                </span>
            </nav>
        </React.Fragment>
    );
}
 
export default NavBar;