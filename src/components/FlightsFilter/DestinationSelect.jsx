import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap/lib';

class DestinationSelect extends Component {
	onChangeFilterHandle(){
		this.props.onChangeFilter({
			to: this.filterByDestination.value
		});
	}
	render() {
		return (
			<FormGroup controlId="formControlsSelect">
				<ControlLabel>To</ControlLabel>
				<FormControl
					componentClass="select"
					placeholder="select"
					inputRef={ (select) => { this.filterByDestination = select; } }
					onChange={ this.onChangeFilterHandle.bind(this) }
					value={ this.props.flightsFilter.direction.to }
				>
					<option value="">All</option>
					{ this.props.cities.map( (city, index) => <option key={index} value={city}>{city}</option> )}
				</FormControl>
			</FormGroup>
		);
	}
}

DestinationSelect.propTypes = {
	cities: PropTypes.array,
	flightsFilter: PropTypes.object,
	onChangeFilter: PropTypes.func
};

export default DestinationSelect;
