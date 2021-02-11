


const correctAnswerReducer = (state = '', action) => {
	switch(action.type){
		case 'GENERATE_EMPTY_ANSWER':
			return state='';
		case 'GENERATE_ANSWER':
			return ;
		default:
			return state;
	}
};

export default correctAnswerReducer;