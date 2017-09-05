import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { inputChanged, refresh, sum } from './action'
import IconButton from './iconButton'

class SumInput extends Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.refresh()
	}

	render() {
		const { state, inputChanged, sum } = this.props
		return (
			<div>
				<div className='container'>
					<div className='col-xs-3'>
						<input id='sumNumber' className='form-control' 
							value={state.currentNumber}
							onChange={inputChanged}
							>
						</input>
					</div>
					<div className='col-xs-1'>
						<IconButton 
							onClick = { () => sum(state) }
							style= 'success'
							icon= 'plus'
						/>
					</div>
					<div className='col-xs-3'>
						<input id='showSum' className='form-control' value={state.sumTotal} disabled></input>
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({ state: state.sum })
const mapDispatchToProps = dispatch => bindActionCreators({
	inputChanged,
	refresh,
	sum
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SumInput)








