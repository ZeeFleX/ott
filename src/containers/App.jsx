import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Flights from './Flights';
import { Col } from 'react-bootstrap/lib';
import '../css/app.css';

class App extends Component {
	render() {
		return (
			<Col md={8} mdOffset={2} className='app container'>
				<Flights ownProps={this.props.ownProps} />
			</Col>
		);
	}
}

App.propTypes = {
	ownProps: PropTypes.object
};

export default connect(
	(state, ownProps) => {
		return {
			state,
			ownProps
		};
	}
)(App);
