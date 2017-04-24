import React, { Component } from  'react';
import { Navbar } from 'react-bootstrap';

/**
 * FooterComponent, to display the footer quick links.
 *
 * @class FooterComponent
 * @extends Component
 */
class FooterComponent extends Component {
    render() {
        return (
            <Navbar fluid className="navbar-custom-bottom hidden-xs">
                    <ul className="nav navbar-nav navbar-item">
                        <li><a target="_blank" href='#'>About Us</a></li>
                        <li><a target="_blank" href='#'>Privacy Policy</a></li>
                        <li><a target="_blank" href='#'>Contact Us</a></li>
                    </ul>
            </Navbar>
        );
    }
}

export default FooterComponent;