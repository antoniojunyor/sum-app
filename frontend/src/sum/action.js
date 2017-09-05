import axios from 'axios'

const URL = 'http://localhost:3030/api/sums'


export const inputChanged = event => ({
	type: 'INPUT_CHANGED',
	payload: event.target.value
})

export const refresh = () => {
	return (dispatch) => {
		axios.get(URL)
			.then(resp => dispatch({ type: 'REFRESH', payload: resp.data[0] }))
	}
}

export const sum = (state) => {
	const sum = state.currentNumber + state.sumTotal
	return dispatch => {
		axios.put(`${URL}/${state.id}`, { ...state, sum: sum })
			.then(resp => dispatch( refresh() ))
	}
}
