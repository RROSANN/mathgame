const displayTimeRemaining = (state = false, action) => {
	switch(action.type){
		case 'DISPLAY_TIME_REMAINING':
			return true;
		case 'HIDE_TIME_REMAINING':
			return false;
		default:
			return state;
	}
};

export default displayTimeRemaining;