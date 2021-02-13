export const resetScore = () => {
	return {
		type: 'RESET_SCORE',
	};
};

export const incrementScore = nr => {
	return {
		type: 'INCREMENT',
		payload: nr
	};
};

export const displayTimeRemaining = () => {
	return {
		type: 'DISPLAY_TIME_REMAINING'
	};
};

export const hideTimeRemaining = () => {
	return {
		type: 'HIDE_TIME_REMAINING'
	};
};

export const startGame = () => {
	return {
		type: 'PLAYING_ON'
	};
};

export const hideStartButton = () => {
	return {
		type: 'HIDE_START_BUTTON'
	};
};

export const generateX = () => {
	return {
		type: 'GENERATE_X'
	};
};

export const generateY = () => {
	return {
		type: 'GENERATE_Y'
	};
};

export const generateAnswer= (x,y) => {
	return {
		type: 'GENERATE_ANSWER',
		payload: {
			x,
			y
		}
	};
};

export const generateWrongAnswer= (x,y) => {
	return {
		type: 'GENERATE_WRONG_ANSWER',
		payload: {
			x,
			y
		}
	};
};

export const displayGO = () => {
	return {
		type: 'DISPLAY_GAME_OVER'
	};
};

export const hideGO = () => {
	return {
		type: 'HIDE_GAME_OVER'
	};
};

export const hideSB = () => {
	return {
		type: 'HIDE_START_BUTTON'
	};
};

export const showRB = () => {
	return {
		type: 'DISPLAY_RESET_BUTTON'
	};
};

export const generateCorrectPosition = () => {
	return {
		type: 'GENERATE_CORRECT_POSITION'
	};
};

export const addCorrectAnswer= (data) => {
	return {
		type: 'APPEND_CORRECT_ANSWER',
		payload: data
	};
};