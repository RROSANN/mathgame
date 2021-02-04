import React from 'react';
import './StartReset.css';

const StartReset = ({something}) => {
	return (
		<div onClick={something} className="start grow">
			Start Game
		 </div>
	);
}

export default StartReset;

