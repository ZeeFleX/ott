import Flight from '../classes/Flight.class.js';

const defaultFlights = [];

export default function flights(state = defaultFlights, action){
	switch (action.type){
	case 'GET_FLIGHTS':
		return action.payload.map( options => {
			return new Flight(options);
		});
	default:
		return state;
	}
}
