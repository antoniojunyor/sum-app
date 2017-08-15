import React, { Component } from 'react';

import IconButton from './iconButton'

export default class sumInput extends Component {
	render() {
		return (
			<div>
				<div className='container'>
					<div className='col-xs-3'>
						<input id='sumNumber' className='form-control' 
							value={this.props.number}
							onChange={this.props.handleChange}
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
						<input id='showSum' className='form-control' value={this.props.result} disabled></input>
					</div>
				</div>
			</div>
		);
	}
}
