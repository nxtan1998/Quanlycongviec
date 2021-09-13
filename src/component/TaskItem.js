import React, {Component} from 'react';
import * as actions from './../Actions/index';
import {connect} from 'react-redux';









class TaskItem extends Component {



     onUpdateStatus = () =>{
         this.props.UpdateStatus(this.props.task.id);
     }
    FunctionDelete = () =>{
        //console.log('đã vào hàm');
        this.props.deletework(this.props.task.id);
    }
    onUpdate = () =>{
        //console.log(this.props.task.id)
        this.props.openform();
    }
    
    render(){
    var { task, index } = this.props  
    //console.log(task);              
        return(
            	<tr>
                        <td>{index}</td>
                        <td>{task.name}</td>
                        <td className="text-center">
                            <span className={task.status=== true ? 'label label-success' : 'label label-danger'}
                                onClick = {this.onUpdateStatus}

                            >
                                    {task.status===true ? 'Kích Hoạt' : 'Ẩn'}
                                    </span>
                        </td>
                        <td className="text-center">
                            <button type="button" className="btn btn-warning"
                                onClick={this.onUpdate}                                                            

                            >
                                <span className="fa fa-pencil mr-5"></span>Sửa
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-danger"
                            onClick={this.FunctionDelete}

                            >
                                <span className="fa fa-trash mr-5"></span>Xóa
                            </button>
                        </td>
                </tr>
            );
    }
}

const mapStatetoProps = (state) =>{
    return {
       
    }
    
};
const mapDispachtoProps = (dispatch,props) =>{
  return {
            UpdateStatus : (id) =>{
            dispatch(actions.update_status(id))
          },
          deletework : (id) =>{
            dispatch(actions.delete_work(id))
          },
          openform : () =>{
            dispatch(actions.open_form())
          }
      };
};

export default connect(mapStatetoProps,mapDispachtoProps)(TaskItem) ;
