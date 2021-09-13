import {combineReducers} from 'redux';
import Alltasks from './Actiontasks';
import isdisform from './isdisform';

const Reducer = combineReducers ({
	Alltasks : Alltasks,// giá trị được tham chiếu từ Actiontasks thay cho myReducer
	isdisform : isdisform
});
export default Reducer;