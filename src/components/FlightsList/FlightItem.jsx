import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Col, Panel } from 'react-bootstrap/lib';

class FlightItem extends Component {
	render() {
		return (
			<Col md={4} className='flightitem react-component'>
				<Panel header={this.props.flight.carrier} bsStyle="primary">
					<strong>From:</strong> {this.props.flight.direction.from}<br />
					<strong>To:</strong> {this.props.flight.direction.to}<br />
					<strong>Departure:</strong> { this.props.flight.departure.format('DD MMM YYYY, HH:mm') }<br />
					<strong>Arrival:</strong> { this.props.flight.arrival.format('DD MMM YYYY, HH:mm') }
					</Panel>
			</Col>
		);
	}
}

FlightItem.propTypes = {
	flight: PropTypes.object
};

export default FlightItem;
