import ScoreReducer from './score.js';
import playingReducer from './playing.js';
import displayTimeRemaining from './displayTimeRemaining.js';
import displayStartButton from './displayStartButton.js';
import xReducer from './xReducer.js';
import yReducer from './yReducer.js';
import correctAnswerReducer from './correctAnswerReducer.js';


import { combineReducers } from 'redux';

const allReducers = combineReducers({
	score: ScoreReducer,
	playing: playingReducer,
	displayTimeRemaining,
	displayStartButton,
	y: yReducer,
	x: xReducer,
	correctAnswer: correctAnswerReducer
});

export default allReducers;

