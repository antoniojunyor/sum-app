import React, { Component } from 'react'

import axios from 'axios'

import SumInput from './sumInput'

const URL = 'http://localhost:3030/api/sums'

export default class Sum extends Component {
	constructor(props){
		super(props)

		this.state = { id: 0, number: 0, sumTotal: 0 }

		this.handleSum = this.handleSum.bind(this)
		this.handleChange = this.handleChange.bind(this)

		this.refresh()
	}

	refresh(){
		axios.get(URL)
			.then(resp => this.setState({ ...this.state, sumTotal: resp.data[0].sum, id: resp.data[0]._id }))
	}

	handleChange(e){
		this.setState({ number: e.target.value })
	}

	handleSum(){
		const id = this.state.id
		let currentNumber = this.state.sumTotal + parseInt(this.state.number) 
		axios.put(`${URL}/${id}`, { ...this.state, sum: currentNumber })
			.then(resp => this.refresh())
	}

	render(){
		return (
			<div>
				<h1>Sum</h1>
				<SumInput
					handleSum = { this.handleSum }
					number = {this.state.number }
					result = { this.state.sumTotal }
				/>
			</div>
		)
	}
}













