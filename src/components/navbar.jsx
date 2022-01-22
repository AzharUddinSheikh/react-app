import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <a href="#" className="navbar-brand">NavBar</a>
                    <span className='nav-link badge badge-pill badge-secondary'>
                        {this.props.totalCounter} item selected
                    </span>
                </nav>
            </React.Fragment>
        );
    }
}
 
export default NavBar;