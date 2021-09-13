import * as types from './../Const/typeActions';

export const addTask = (task) =>{
	return {
		type : types.ADD_TASK,
		task : task
	}
};
export const litAll = () =>{
	return {
		type : types.LIST_ALL
	}
};
export const toggle_form = () =>{
	return {
		type : types.TOGGLE_FORM
	}
		
};
export const close_form = () =>{
	return {
		type : types.CLOSE_FORM
	}
		
};
export const open_form = () =>{
	return {
		type : types.OPEN_FORM
	}
		
};
export const update_status = (id) =>{
	return {
		type : types.UPDATE_STATUS,
		id : id

	}
}
export const delete_work = (id) =>{
	return {
		type : types.DELETE_WORK,
		id : id
	}
}