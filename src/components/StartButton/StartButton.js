import React from 'react';
import './StartButton.css';
import { resetScore, displayTimeRemaining, startGame, generateX, generateY,generateAnswer } from '../../actions/index.js';
import { useDispatch,useSelector } from 'react-redux';





const StartButton = ({start,generateAnswer, startReset, displayStart}) => {
	const x = useSelector(state => state.x);
	const y = useSelector(state => state.y);
	const dispatch = useDispatch();
	
	function callStartButton() {
 	dispatch(resetScore())	
 	dispatch(displayTimeRemaining())
 	dispatch(startGame())
 	dispatch(generateX())
 	dispatch(generateY())
 	dispatch(generateAnswer(x,y))
 	start()	
 		
}
	return (

		<div onClick={callStartButton} style={{ display: (displayStart === true) ? "block" : "none" }}className="start grow">
			Start Game
		 </div> 
	);
}

export default StartButton;

