import React from 'react';
import './StartButton.css';
import { resetScore, addCorrectAnswer, generateWrongAnswer, generateCorrectPosition, displayTimeRemaining, showRB, hideSB, startGame, generateX, generateY,generateAnswer } from '../../actions/index.js';
import { useDispatch,useSelector } from 'react-redux';





const StartButton = () => {
	const x = useSelector(state => state.x);
	const y = useSelector(state => state.y);
	const dispatch = useDispatch();


	function callStartButton() {
 	dispatch(resetScore())	
 	dispatch(displayTimeRemaining())
 	dispatch(startGame())
 	dispatch(generateX())            
 	dispatch(generateY())
 	dispatch(hideSB())
 	dispatch(showRB())
 	dispatch(generateAnswer(x,y))
 	dispatch(generateWrongAnswer(1+ Math.round(9*Math.random()),1+ Math.round(9*Math.random())))
 	dispatch(generateCorrectPosition())	
 	dispatch(addCorrectAnswer())
}

	return (
		<div onClick={callStartButton} className="start grow">
			Start Game 
		 </div> 
	);
}

export default StartButton;

