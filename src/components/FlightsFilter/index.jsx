import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import CarrierSelect from './CarrierSelect';
import SourceSelect from './SourceSelect';
import DestinationSelect from './DestinationSelect';
import DepartureDatePicker from './DepartureDatePicker';
import ArrivalDatePicker from './ArrivalDatePicker';
import { FormGroup, Row, Col, Button } from 'react-bootstrap/lib';

class FlightsFilter extends Component {
	onResetFilterHandle(event){
		event.preventDefault();
		this.props.onResetFilter();
	}
	render() {
		return (
      <form className="flights-filter react-component">
				<FormGroup>
					<Row>
						<Col md={4}>
							<CarrierSelect
								carriers={this.props.carriers}
								flightsFilter={this.props.flightsFilter}
								onChangeFilter={this.props.onChangeFilter.bind(this)}
							/>
						</Col>
						<Col md={4}>
							<SourceSelect
								cities={this.props.cities}
								flightsFilter={this.props.flightsFilter}
								onChangeFilter={this.props.onChangeFilter.bind(this)}
							/>
						</Col>
						<Col md={4}>
							<DestinationSelect
								cities={this.props.cities}
								flightsFilter={this.props.flightsFilter}
								onChangeFilter={this.props.onChangeFilter.bind(this)}
							/>
						</Col>
					</Row>
					<Row>
						<Col md={4}>
							<DepartureDatePicker
								flightsFilter={this.props.flightsFilter}
								onChangeFilter={this.props.onChangeFilter.bind(this)}
							/>
						</Col>
						<Col md={4}>
							<ArrivalDatePicker
								flightsFilter={this.props.flightsFilter}
								onChangeFilter={this.props.onChangeFilter.bind(this)}
							/>
						</Col>
						<Col md={4}>
							<Button bsStyle="danger" onClick={ (event) => this.onResetFilterHandle(event) }>Clear filter</Button>
						</Col>
					</Row>
				</FormGroup>
      </form>
		);
	}
}

FlightsFilter.propTypes = {
	carriers: PropTypes.array,
	cities: PropTypes.array,
	flightsFilter: PropTypes.object,
	onChangeFilter: PropTypes.func,
	onResetFilter: PropTypes.func
};

export default FlightsFilter;
