const INITIAL_STATE = { 
	id: 0, 
	currentNumber: 0, 
	sumTotal: 0 
}

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'REFRESH':
		 	return { ...state, id: action.payload._id, sumTotal: action.payload.sum }
		case 'INPUT_CHANGED':
		 	return { ...state, currentNumber: +action.payload}
		default:
			return state
	}
}