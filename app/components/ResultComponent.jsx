import React, { Component, PropTypes } from  'react';
import { connect } from 'react-redux';
import { Col } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Sparklines, SparklinesLine, SparklinesSpots  } from 'react-sparklines';
import { getFxPrices } from '../actions/fxAction';
import { updateData } from '../utils';

@connect((store) => {
    return {
        fxPrice: store.fx.fxPrice,
    };
})

/**
 * ResultComponent, displays the result in table format
 *
 * @class ResultComponent
 * @extends Component
 */
class ResultComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fxPrices: []
        }
    };
    componentWillReceiveProps(nextProps) {
        let fxPrices = this.state.fxPrices;
        let nexFxPrices = updateData(fxPrices, nextProps.fxPrice);
        this.setState({fxPrices: nexFxPrices});
    };
    componentDidMount() {
        this.props.dispatch(getFxPrices());
    };
    imageFormatter(cell, row) {
        return <Sparklines data={cell}><SparklinesLine style={{ fill: "none" }} /><SparklinesSpots /></Sparklines>;
    };
    render() {
        const options = {
          sortName: 'lastChangeBid',
          sortOrder: 'asc',
        }
    	return (
            <Col md={12} sm={12} className="search-wrapper">
                <h2>Current bid prices: </h2>
                <BootstrapTable data={ this.state.fxPrices }  options={ options }>
                    <TableHeaderColumn dataField='name' isKey>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='bestBid'>Current best bid price</TableHeaderColumn>
                    <TableHeaderColumn dataField='bestAsk'>Current best ask price</TableHeaderColumn>
                    <TableHeaderColumn dataField='lastChangeBid'>Best bid last change</TableHeaderColumn>
                    <TableHeaderColumn dataField='lastChangeAsk'>Best ask last change</TableHeaderColumn>
                    <TableHeaderColumn dataField='sparklines' dataFormat={this.imageFormatter}>Midprice</TableHeaderColumn>
                </BootstrapTable>
            </Col>
        );
    }
}

export default ResultComponent;

