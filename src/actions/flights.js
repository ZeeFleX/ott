import _ from 'lodash';

export const getFlights = () => dispatch => {
	fetch('/api/data.json')
		.then( response => response.json() )
		.then( response => {
			let carriers = _.uniq(
				response.flights.map( flight => {
					return flight.carrier;
				})
			);
			let cities = _.uniq(
				_.flatten(
					response.flights.map( flight => {
						return [flight.direction.from, flight.direction.to];
					})
				)
			);

			dispatch({ type: 'GET_FLIGHTS', payload: response.flights });
			dispatch({ type: 'SET_CARRIERS', payload: carriers });
			dispatch({ type: 'SET_CITIES', payload: cities });
		})
		.catch( error => {
			throw new Error(error);
		});
};

export const filterFlightsFunc = (flights, filter) => {
	return flights.filter( (flight) => {
		return !!(
			(!filter.carrier || flight.carrier === filter.carrier)  &&
			(!filter.direction.from || flight.direction.from === filter.direction.from)  &&
			(!filter.direction.to || flight.direction.to === filter.direction.to) &&
			(!filter.departure || flight.departure.format('YYYY-MM-DD') === filter.departure.format('YYYY-MM-DD')) &&
			(!filter.arrival || flight.arrival.format('YYYY-MM-DD') === filter.arrival.format('YYYY-MM-DD'))
		);
	});
};
