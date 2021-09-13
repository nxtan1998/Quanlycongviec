import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './../Actions/index';






class TaskForm extends Component {
      constructor (props){
    super(props);
    this.state = {
      id : '',
      name : '',
      status : false
      }
    } 
    
   componentWillMount() {
    //console.log(this.props.task);
    if(this.props.task){
      
      this.setState({
          id : this.props.task.id,
          name: this.props.task.name,
          status : this.props.task.status
      });

    }
    
   }
   componentWillReceiveProps(nextProps){
       if(nextProps && nextProps.task ){
        console.log('a');
      
      this.setState({
          id : nextProps.task.id,
          name: nextProps.task.name,
          status : nextProps.task.status
      });

    }
   }

    // onClose = () =>{
    //      this.props.onClose();
    //  }
     FunctionChange = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        
        if(name === 'status'){
            value = event.target.value === 'true' ? true : false;
        }

        this.setState({
            [name] : value
        });
     }
     FunctionSubmit = (event) =>{
       
        event.preventDefault();
        this.props.onAddTask(this.state);
        
        this.onClear();
       // this.onClose();
     }
     onClear = () => {
        this.setState({
            name : '',
            status : false

        });
     }
    
    
    render(){    
    var {id} = this.state
    //console.log(id); 
    if(!this.props.IsForm) return '';        
        return(
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            
                            <button type="button" 
                            className="btn btn-danger"
                            onClick={this.onClose}
                            >{id !==''?'Cập Nhật Công Việc':'Thêm Công Việc'}</button>
                        </h3>
                    </div>
                    <div className="panel-body">
                        <form onSubmit = {this.FunctionSubmit}>
                            <div className="form-group">
                                <label>Tên :</label>
                                <input type="text" className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.FunctionChange}

                                 />
                            </div>
                            <label>Trạng Thái :</label>
                            <select className="form-control" 
                                required="required"
                                name="status"
                                value={this.state.status}
                                onChange={this.FunctionChange}

                            >
                                <option value={true}>Kích Hoạt</option>
                                <option value={false}>Ẩn</option>
                            </select>
                            <br/>
                            <div className="text-center">
                                <button type="submit" className="btn btn-warning">Lưu Lại</button>&nbsp;
                                <button type="button"
                                 className="btn btn-danger"
                                 onClick={this.onClear}
                                 >Hủy Bỏ</button>
                            </div>
                        </form>
                    </div>
                </div>
            );
    }
}
const mapStatetoProps = (state) =>{
    return {
        IsForm : state.isdisform
    }
    
};
const mapDispachtoProps = (dispatch,props) =>{
  return {
      onAddTask : (x) =>{
        dispatch(actions.addTask(x)); // giá trị x trong component chỉ là biến được tham chiếu sang typeaction.js
      }
  }
}

export default connect(mapStatetoProps,mapDispachtoProps)(TaskForm) ;
