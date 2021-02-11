import React from 'react';
import './StartButton.css';
import { resetScore, displayTimeRemaining, startGame, generateX, generateY } from '../../actions/index.js';
import { useDispatch } from 'react-redux';




const StartButton = ({start,generateAnswer, startReset, displayStart}) => {
	
	const dispatch = useDispatch();
	
	function callStartButton() {
 	dispatch(resetScore())	
 	dispatch(displayTimeRemaining())
 	dispatch(startGame())
 	dispatch(generateX())
 	dispatch(generateY())
 	start()	
 		
}
	return (
		<div onClick={callStartButton} style={{ display: (displayStart === true) ? "block" : "none" }}className="start grow">
			Start Game
		 </div> 
	);
}

export default StartButton;

