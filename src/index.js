import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import CinemaBoard from './containers/CinemaBoard';

const App = () => (
	<div className="container-fluid text-center">
		<h1 className="mt-3">Cinema Seating</h1>
		<CinemaBoard />
	</div>
);

ReactDOM.render(<App />, document.getElementById('root'));
