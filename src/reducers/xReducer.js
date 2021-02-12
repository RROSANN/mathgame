const xReducer = (state = '', action) => {
	switch(action.type){
		case 'GENERATE_X':
			return 1+ Math.round(9*Math.random());
		default:
			return state;
	}
};

export default xReducer;