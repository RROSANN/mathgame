const displayStartButtonReducer = (state = true, action) => {
	switch(action.type){
		case 'DISPLAY_START_BUTTON':
			return true;
		case 'HIDE_START_BUTTON':
			return false;
		default:
			return state;
	}
};

export default displayStartButtonReducer;