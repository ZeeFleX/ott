import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import FlightItem from './FlightItem';
import { Row } from 'react-bootstrap/lib';

class FlightsList extends Component {
	render() {
		return (
      <Row className="flightslist react-component">
				{ this.props.flights.map( flight => <FlightItem key={flight.id} flight={flight} /> ) }
			</Row>
		);
	}
}

FlightsList.propTypes = {
	flights: PropTypes.array
};

export default FlightsList;
