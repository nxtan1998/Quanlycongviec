import * as types from './../Const/typeActions';



var s4 = () =>
	{
     return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
 	}
var genarateID = () =>
      {
        return s4() + s4() + '-' + s4();
      }

  var findID = (tasks,id) =>{
        
        var result = -1;
        tasks.forEach((task,index)=>{
//id là sự kiện mình click vào trong mảng         
           
          if(task.id === id){
            result = index;
          }
        });
        return result;
      }


var data = JSON.parse(localStorage.getItem('tasks'));
var intState = data ? data : [];
// var intState = [
// 		{
// 			id : 1,
// 			name : 'Học',
// 			status : true
// 		}
// ];


var myReducer = (state = intState, action) =>{
	switch(action.type) {
		case  types.LIST_ALL:
			return state;
		case types.ADD_TASK :
////////////////////////////////////////////////////////////////
		//console.log(action);
		var newtask = 	{
				id : genarateID(),
				name : action.task.name,//task là giá trị từ index.js của action truyền sang
				status : action.task.status 
			}
		 	state.push(newtask);
		localStorage.setItem('tasks', JSON.stringify(state));
		
			 return [...state];
			 //return state;
///////////////////////////////////////////////////////////////
		case  types.UPDATE_STATUS :
			var id = action.id;
			var index = findID(state , id);
			var clonetask = {...state[index]};
				clonetask.status = !clonetask.status;
				state[index] = clonetask;
			localStorage.setItem('tasks', JSON.stringify(state));

			return [...state];
////////////////////////////////////////////////////////////
		case types.DELETE_WORK :
			var id = action.id;
			var index = findID(state , id);
			state.splice(index , 1);
			localStorage.setItem('tasks', JSON.stringify(state));
			return [...state];
/////////////////////////////////////////////////////////////

			
		default :return state;
			
	}
	
};
export default myReducer;
