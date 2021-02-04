import React from 'react';
import './TimeRemaining.css';

const TimeRemaining = (display) => {
	return (
		<div  className="time">
			Time remaining: <span id='timeremainingvalue'>60</span> sec
		 </div>
	);
}

export default TimeRemaining;