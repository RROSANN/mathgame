const displayGameOver = (state = false, action) => {
	switch(action.type){
		case 'DISPLAY_GAME_OVER':
			return true;
		case 'HIDE_GAME_OVER':
			return false;
		default:
			return state;
	}
};

export default displayGameOver;