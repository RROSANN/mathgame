

const ScoreReducer = (state = '', action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + action.payload;
		case 'RESET_SCORE':
			return state = 0;
		default:
			return state;
	}
};

export default ScoreReducer;