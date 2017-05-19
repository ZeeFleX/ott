import Flight from '../classes/Flight.class.js';
const initialState = new Flight({});

export default function flightsFilter(state = initialState, action){
	switch (action.type){
	case 'SET_FILTER':
		return new Flight(action.payload);
	case 'RESET_FILTER':
		return new Flight({});
	default:
		return state;
	}
}
