
const playingReducer = (state = false, action) => {
	switch(action.type){
		case 'PLAYING_ON':
			return true;
		default:
			return state;
	}
};

export default playingReducer;