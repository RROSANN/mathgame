const wrongAnswerReducer = (state = '', action) => {
	switch(action.type){
		case 'GENERATE_WRONG_ANSWER':
			return action.payload.x * action.payload.y ;
		default:
			return state;
	}
};

export default wrongAnswerReducer;