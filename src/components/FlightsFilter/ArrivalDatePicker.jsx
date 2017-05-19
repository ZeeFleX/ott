import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class ArrivalDatePicker extends Component {
	arrivalDateChange(arrivalDate){
		this.props.onChangeFilter({ arrivalDate });
	}
	render() {
		return (
			<div className="form-group">
				<label className="control-label">Choose arrival date</label>
				<DatePicker
						dateFormat='DD MMM YYYY'
						isClearable={true}
						selected={this.props.flightsFilter.arrival}
						onChange={this.arrivalDateChange.bind(this)}
						className='form-control'
				/>
			</div>
		);
	}
}

ArrivalDatePicker.propTypes = {
	flightsFilter: PropTypes.object,
	onChangeFilter: PropTypes.func
};

export default ArrivalDatePicker;
