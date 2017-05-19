const initialState = [];

export default function carriers(state = initialState, action){
	switch (action.type){
	case 'SET_CARRIERS':
		return action.payload;
	default:
		return state;
	}
}
