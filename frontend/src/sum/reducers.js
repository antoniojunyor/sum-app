const INITIAL_STATE = { id: 0, number: 1, sumTotal: 0 }

export default (state = INITIAL_STATE, action) => {
	switch(action.type){
		case 'SUM':
			return { ...state, sumTotal: state.number + state.sumTotal }
		case 'INPUT_CHANGED':
		 	return { ...state, number: action.payload}
		default:
			return state
	}
}