import React, { Component } from  'react';
import { Navbar } from 'react-bootstrap';

/**
 * NavComponent, to display the brand for the app.
 *
 * @class NavComponent
 * @extends Component
 */
class NavComponent extends Component {
    render() {
        return (
            <Navbar fluid className="navbar-custom navbar-fixed-to">
                <Navbar.Header className="col-sm-12 no-padding">
                    <Navbar.Brand>
                        <a>Fx Prices</a>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }
}

export default NavComponent;