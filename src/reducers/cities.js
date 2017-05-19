const initialState = [];

export default function cities(state = initialState, action){
	switch (action.type){
	case 'SET_CITIES':
		return action.payload;
	default:
		return state;
	}
}
