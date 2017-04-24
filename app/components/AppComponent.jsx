import React, { Component, PropTypes } from  'react';
import { Grid, Col, Row } from 'react-bootstrap';
import NavComponent from './common/NavComponent.jsx';
import FooterComponent from './common/FooterComponent.jsx';

/**
 * AppComponent, entry point for all the components
 *
 * @class AppComponent
 * @extends Component
 */
class AppComponent extends Component {
    render() {
        return (
            <Grid fluid>
                <Row>
                    <NavComponent />
                </Row>
                <Row>
                    <Col md={12} className="container-fluid">
                        { this.props.children }
                    </Col>
                </Row>
                <Row>
                    <FooterComponent />
                </Row>
            </Grid>
        );
    }
}

export default AppComponent;