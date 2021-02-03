import React from 'react';
import './ScoreBox.css';

const ScoreTop = () => {
	return (

		<div className="flex justify-between">
		  <div className=" w-15 ">
		  </div>
		  <div className="w-15">
		  </div>
		  <div className=" score w-15">
			Score: <span id='scoreValue'>0</span>
		  </div>
		</div>
	);
}

export default ScoreTop;