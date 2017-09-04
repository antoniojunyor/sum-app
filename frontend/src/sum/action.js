export function sum(){
	return {
		type: 'SUM'
	}
}

export const inputChanged = event => ({
		type: 'INPUT_CHANGED',
		payload: event.target.value
})