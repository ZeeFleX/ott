import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class DepartureDatePicker extends Component {
	departureDateChange(departureDate){
		this.props.onChangeFilter({ departureDate });
	}
	render() {
		return (
			<div className="form-group">
				<label className="control-label">Choose departure date</label>
				<DatePicker
						dateFormat='DD MMM YYYY'
						isClearable={true}
						selected={this.props.flightsFilter.departure}
						onChange={this.departureDateChange.bind(this)}
						className='form-control'
				/>
			</div>
		);
	}
}

DepartureDatePicker.propTypes = {
	flightsFilter: PropTypes.object,
	onChangeFilter: PropTypes.func
};

export default DepartureDatePicker;
