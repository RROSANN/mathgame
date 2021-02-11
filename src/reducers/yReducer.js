const yReducer = (state = '', action) => {
	switch(action.type){
		case 'GENERATE_Y':
			return state = 1+ Math.round(9*Math.random());
		default:
			return state;
	}
};

export default yReducer;