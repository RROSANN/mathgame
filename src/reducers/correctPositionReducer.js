const correctPositionReducer = (state = '', action) => {
	switch(action.type){
		case 'GENERATE_CORRECT_POSITION':
			return  1+ Math.round(3*Math.random());
		default:
			return state;
	}
};

export default correctPositionReducer;