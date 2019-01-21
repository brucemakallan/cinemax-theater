import React, { Component } from 'react';
import Cell from '../../components/Cell';
import PropTypes from 'prop-types';

class CellHolder extends Component {
	handleOnClick = (id) => {
		// console.log('clicked ', id);
	}
	render() { 
		const { value, type, id } = this.props;
		return (
			<Cell value={value} type={type} id={id} onClick={this.handleOnClick} />
		);
	}
}

CellHolder.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired
};
 
export default CellHolder;
