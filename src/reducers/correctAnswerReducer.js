


const correctAnswerReducer = (state = '', action) => {
	switch(action.type){
		case 'GENERATE_ANSWER':
			return action.payload.x * action.payload.y ;
		default:
			return state;
	}
};

export default correctAnswerReducer;