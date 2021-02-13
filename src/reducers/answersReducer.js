
const initialStateAnswers = {
	correctAnswer: '',
	wrongAnswer1: '',
	wrongAnswer2: '',
	wrongAnswer3: '',
}



const answersReducer = (state = initialStateAnswers, action) => {
	switch(action.type){
		case 'APPEND_CORRECT_ANSWER':
	return  Object.assign({}, state, { correctAnswer: action.payload })
		case 'APPEND_WRONG_ANSWER1':
	return  Object.assign({}, state, { wrongAnswer1: action.payload })
		case 'APPEND_WRONG_ANSWER2':
	return  Object.assign({}, state, { wrongAnswer2: action.payload })
		case 'APPEND_WRONG_ANSWER3':
	return  Object.assign({}, state, { wrongAnswer3: action.payload })
		default:
			return state;
	}
};

export default answersReducer;