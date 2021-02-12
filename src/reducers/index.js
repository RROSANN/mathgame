import ScoreReducer from './score.js';
import playingReducer from './playing.js';
import displayTimeRemaining from './displayTimeRemaining.js';
import displayStartButton from './displayStartButton.js';
import xReducer from './xReducer.js';
import yReducer from './yReducer.js';
import correctAnswerReducer from './correctAnswerReducer.js';
import displayGameOver from './displayGameOver.js';
import displayResetReducer from './displayResetReducer.js';
import correctPositionReducer from './correctPositionReducer.js';
import wrongAnswerReducer from './wrongAnswerReducer.js';
import answersReducer from './answersReducer.js';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
	score: ScoreReducer,
	playing: playingReducer,
	displayTimeRemaining,
	displayStartButton,
	y: yReducer,
	x: xReducer,
	correctAnswer: correctAnswerReducer,
	displayGameOver,
	displayResetButton: displayResetReducer,
	correctPosition: correctPositionReducer,
	wrongAnswer: wrongAnswerReducer,
	answers: answersReducer
});

export default allReducers;

