import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import flights from './flights';
import carriers from './carriers';
import cities from './cities';
import flightsFilter from './flightsFilter';

export default combineReducers({
	routing: routerReducer,
	flights,
	carriers,
	flightsFilter,
	cities
});
