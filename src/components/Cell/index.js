import React from 'react';
import './cell.scss';
import PropTypes from 'prop-types';

const Cell = ({ value, type, id, onClick }) => {
	if (value === 0) value = '';  // don't show the number zero
	return (
		<div className="cell">
			<div className={`cellValue ${type}`}>
				{
					(value === '*')
						? <button type="button" title={type} id={id} onClick={() => onClick(id)}>
							<i className="fas fa-chair"></i>
						</button>
						: value
				}
			</div>
		</div>
	);
};

Cell.propTypes = {
	value: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
 
export default Cell;
