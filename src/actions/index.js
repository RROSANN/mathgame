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

export const generateAnswer= () => {
	return {
		type: 'GENERATE_ANSWER'
	};
};
