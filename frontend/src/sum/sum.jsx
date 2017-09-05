import React, { Component } from 'react'

import axios from 'axios'

import SumInput from './sumInput'

const URL = 'http://localhost:3030/api/sums'

export default class Sum extends Component {
	constructor(props){
		super(props)
	}

	render(){
		return (
			<div>
				<h1>Sum</h1>
				<SumInput />
			</div>
		)
	}
}