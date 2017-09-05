import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { inputChanged, refresh } from './action'
import IconButton from './iconButton'

class SumInput extends Component {
	constructor(props){
		super(props)
	}

	componentWillMount(){
		this.props.refresh()
	}

	render() {
		console.log(this.props.sumTotal)
		return (
			<div>
				<div className='container'>
					<div className='col-xs-3'>
						<input id='sumNumber' className='form-control' 
							value={this.props.number}
							onChange={this.props.inputChanged}
							>
						</input>
					</div>
					<div className='col-xs-1'>
						<IconButton 
							onClick = {this.props.handleSum}
							style= 'success'
							icon= 'plus'
						/>
					</div>
					<div className='col-xs-3'>
						<input id='showSum' className='form-control' value={this.props.sumTotal} disabled></input>
					</div>
				</div>
			</div>
		)
	}
}


const mapStateToProps = state => ({ number: state.sum.number, sumTotal: state.sum.sumTotal })
const mapDispatchToProps = dispatch => bindActionCreators({
	inputChanged,
	refresh
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(SumInput)