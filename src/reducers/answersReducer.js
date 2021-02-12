const answersReducer = (state = '', action) => {
	switch(action.type){
		case 'APPEND_CORRECT_ANSWER':
	return  action.payload.data;
		case 'ADD_WRONG_ANSWER1':
	return  //here I should be able to load the state of correct answer;
		case 'ADD_WRONG_ANSWER2':
	return  //here I should be able to load the state of correct answer;
		case 'ADD_WRONG_ANSWER3':
			return  //here I should be able to load the state of correct answer;
		default:
			return state;
	}
};

export default answersReducer;