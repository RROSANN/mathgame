import React from 'react';
import './ScoreBox.css';
import { useSelector } from 'react-redux';

 
const ScoreTop = () => {
	const score = useSelector(state => state.score);
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