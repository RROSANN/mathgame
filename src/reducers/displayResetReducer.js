const displayResetReducer = (state = false, action) => {
	switch(action.type){
		case 'DISPLAY_RESET_BUTTON':
			return true;
		case 'HIDE_RESET_BUTTON':
			return false;
		default:
			return state;
	}
};

export default displayResetReducer;