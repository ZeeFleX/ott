import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap/lib';

class SourceSelect extends Component {
	onChangeFilterHandle(){
		this.props.onChangeFilter({
			from: this.filterBySource.value
		});
	}
	render() {
		return (
			<FormGroup controlId="formControlsSelect">
				<ControlLabel>From</ControlLabel>
				<FormControl
					componentClass="select"
					placeholder="select"
					inputRef={ (select) => { this.filterBySource = select; } }
					onChange={ this.onChangeFilterHandle.bind(this) }
					value={ this.props.flightsFilter.direction.from }
				>
					<option value="">All</option>
					{ this.props.cities.map( (city, index) => <option key={index} value={city}>{city}</option> )}
				</FormControl>
			</FormGroup>
		);
	}
}

SourceSelect.propTypes = {
	cities: PropTypes.array,
	flightsFilter: PropTypes.object,
	onChangeFilter: PropTypes.func
};

export default SourceSelect;
