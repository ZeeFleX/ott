import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap/lib';

class CarrierSelect extends Component {
	onChangeFilterHandle(){
		this.props.onChangeFilter({
			carrier: this.filterByCarrier.value
		});
	}
	render() {
		return (
			<FormGroup controlId="formControlsSelect">
				<ControlLabel>Select carrier</ControlLabel>
				<FormControl
					componentClass="select"
					placeholder="select"
					inputRef={ (select) => { this.filterByCarrier = select; } }
					onChange={ this.onChangeFilterHandle.bind(this) }
					value={ this.props.flightsFilter.carrier }
				>
				<option value="">All</option>
					{ this.props.carriers.map( (carrier, index) => <option key={index} value={carrier}>{carrier}</option> )}
				</FormControl>
			</FormGroup>
		);
	}
}

CarrierSelect.propTypes = {
	carriers: PropTypes.array,
	flightsFilter: PropTypes.object,
	onChangeFilter: PropTypes.func
};

export default CarrierSelect;
