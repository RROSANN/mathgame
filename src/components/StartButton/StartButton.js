import React from 'react';
import './StartButton.css';

const StartButton = ({start, startReset, displayStart}) => {
	return (
		<div onClick={start} style={{ display: (displayStart === true) ? "block" : "none" }}className="start grow">
			{startReset}
		 </div> 
	);
}

export default StartButton;

