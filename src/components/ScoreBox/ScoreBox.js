import React from 'react';
import './ScoreBox.css';
 
const ScoreTop = ({ score }) => {
	return (

		<div className="flex justify-between">
		  <div className=" w-15 ">
		  </div>
		  <div className="w-15">
		  </div>
		  <div className=" score w-15">
			Score: {score}
		  </div>
		</div>
	);
}

export default ScoreTop;