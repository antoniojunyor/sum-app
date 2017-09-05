import axios from 'axios'

const URL = 'http://localhost:3030/api/sums'

export const refresh = () => {
	return (dispatch) => {
		axios.get(URL)
			.then(resp => dispatch({ type: 'REFRESH', payload: resp.data[0].sum }))
	}
}

export const sum = () => ({
	type: 'SUM'
})

export const inputChanged = event => ({
	type: 'INPUT_CHANGED',
	payload: event.target.value
})