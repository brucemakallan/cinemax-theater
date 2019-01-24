import React, { Component } from 'react';
import './cinemaBoard.scss';
import CellHolder from '../CellHolder';

class CinemaBoard extends Component {
  
	// Handle methods for the Cinema Board

	render() {
		const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
		return (
			<div className="cinemaBoard">
				{[...Array(21)].map(
					(el, index) => <CellHolder key={index} value={String(index)} type="" id={String(index)} />
				)}

				{rows.map((rowLetter, index) => {  // render rows with seats
					return (
						<React.Fragment key={index}>
							<CellHolder value={rowLetter} type="" id={`${rowLetter}0`} />
							{[...Array(20)].map((el, i) => {
								let type = 'vvip';
								if((rowLetter === 'A' || rowLetter === 'B') && (i >= 4 && i <= 15)) {
									type = 'twin';
								}
								else if(rowLetter >= 'G' && (rowLetter <= 'L')) type = 'vip';
								else if(rowLetter >= 'M') type='normal';
								return <CellHolder key={i} value="*" type={type} id={rowLetter + (i+1)} />;
							})}
						</React.Fragment>
					);
				})}
			</div>
		);
	}
}
 
export default CinemaBoard;
