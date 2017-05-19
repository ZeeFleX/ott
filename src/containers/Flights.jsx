import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFlights } from '../actions/flights';
import { PropTypes } from 'prop-types';
import { filterFlightsFunc } from '../actions/flights';
import Flight from '../classes/Flight.class.js';
import FlightsFilter from '../components/FlightsFilter/index';
import FlightsList from '../components/FlightsList/index';
import { Col, Panel } from 'react-bootstrap/lib';
import '../css/flights.css';

class Flights extends Component {
	componentWillReceiveProps(nextProps) {
		let paramsArray = [
			this.props.ownProps.location.query.flights ? this.props.ownProps.location.query.flights : '{}',
			nextProps.ownProps.location.query.flights ? nextProps.ownProps.location.query.flights : '{}'
		];
		if (paramsArray[1] !== paramsArray[0]) {
			let flightsFilter = new Flight(JSON.parse(paramsArray[1]));
			this.props.onChangeFilter(flightsFilter);
		}
	}

	componentWillMount(){
		this.props.onGetFlights();
		if(this.props.ownProps.location.query.flights){
			let params = JSON.parse(this.props.ownProps.location.query.flights);
			let flightsFilter = new Flight(params);
			this.props.onChangeFilter(flightsFilter);
		}
	}

	onChangeFilterHandle(params){
		let flightsFilter = this.props.flightsFilter;

		if (params.carrier !== void(0)) params.carrier ? flightsFilter.carrier = params.carrier : flightsFilter.carrier = '';
		if (params.from !== void(0)) params.from ? flightsFilter.direction.from = params.from : flightsFilter.direction.from = '';
		if (params.to !== void(0)) params.to ? flightsFilter.direction.to = params.to : flightsFilter.direction.to = '';
		if (params.departureDate !== void(0)) params.departureDate !== null ? flightsFilter.departure = params.departureDate : flightsFilter.departure = null;
		if (params.arrivalDate !== void(0)) params.arrivalDate !== null ? flightsFilter.arrival = params.arrivalDate : flightsFilter.arrival = null;

		this.props.ownProps.router.push({
			query: {flights: JSON.stringify(flightsFilter)}
		});
	}

	onResetFilterHandle(){
		this.props.ownProps.router.push({
			query: {}
		});
		this.props.onResetFilter();
	}

	render() {
		return (
      <Col className="flights react-container">
				<Panel>
					<FlightsFilter
						carriers={this.props.carriers}
						cities={this.props.cities}
						flightsFilter={this.props.flightsFilter}
						onChangeFilter={this.onChangeFilterHandle.bind(this)}
						onResetFilter={this.onResetFilterHandle.bind(this)}
					/>
					<FlightsList
						flights={this.props.flights}
					/>
				</Panel>
      </Col>
		);
	}
}

Flights.propTypes = {
	flights: PropTypes.array.isRequired,
	carriers: PropTypes.array.isRequired,
	cities: PropTypes.array.isRequired,
	location: PropTypes.object,
	flightsFilter: PropTypes.object,
	onChangeFilter: PropTypes.func,
	onResetFilter: PropTypes.func,
	onGetFlights: PropTypes.func,
	ownProps: PropTypes.object
};

export default connect(
	state => {
		return {
			flights: filterFlightsFunc(state.flights, state.flightsFilter),
			carriers: state.carriers,
			cities: state.cities,
			flightsFilter: state.flightsFilter
		};
	},
	dispatch => ({
		onGetFlights: () => {
			dispatch(getFlights());
		},
		onChangeFilter: (flightsFilter) => {
			dispatch({ type: 'SET_FILTER', payload: flightsFilter });
		},
		onResetFilter: () => {
			dispatch({ type: 'RESET_FILTER' });
		}
	})
)(Flights);
