import * as types from './../Const/typeActions';






var intState = false;


var myReducer = (state = intState, action) =>{
	switch(action.type) {
		case  types.TOGGLE_FORM:
			return !state;
		case types.CLOSE_FORM :
			return false;
		case types.OPEN_FORM :
			return true;


	
		default :return state;
			
	}
	
};
export default myReducer;
