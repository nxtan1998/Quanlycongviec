import React, {Component} from 'react';
import TaskItem from './TaskItem';
import {connect} from 'react-redux';








class TaskList extends Component {
     constructor (props){
    super(props);
    this.state = {
     fillterName : '',
     fillterStatus : -1
    }
}
    Functionchange = (event)=>{
        var name = event.target.name;
        var value = event.target.value;
        this.props.onFillter(
            name === 'fillterName' ? value : this.state.fillterName,
            name === 'fillterStatus' ? value : this.state.fillterName
            );
        this.setState({
            [name] : value
        });
        //console.log(this.state);

    }
    
    render(){
        //Props Mang dữ liệu từ state truyền sang 
        
        var  {tasks} = this.props;
         var {fillterName,fillterStatus} = this.state;
       

         var element = tasks.map((task,index) => {
                 return <TaskItem  
                 key={task.id}
                  index={index}
                   task={task}
                    //onUpdateStatus = {this.props.UpdateStatus}
                    
                    Update2 = {this.props.Update1}
                   />
         });              
        return(
            	<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <table className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                        <th className="text-center">STT</th>
                                        <th className="text-center">Tên</th>
                                        <th className="text-center">Trạng Thái</th>
                                        <th className="text-center">Hành Động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td>
                                            <input type="text" className="form-control"
                                            name="fillterName"
                                            value = {this.fillterName}
                                            onChange = {this.Functionchange}


                                            />
                                        </td>
                                        <td>
                                            <select className="form-control" 
                                                name="fillterStatus"
                                                value = {this.fillterStatus}
                                                onChange = {this.Functionchange}
                                            >
                                                <option value="-1">Tất Cả</option>
                                                <option value="0">Ẩn</option>
                                                <option value="1">Kích Hoạt</option>
                                            </select>
                                        </td>
                                        <td></td>
                                    </tr>
                                  {element}
                                   
                                </tbody>
                            </table>
                        </div>
            );
    }
}
const mapStatetoProps = (state) =>{
    return {
        tasks : state.Alltasks
    }
    
};

export default connect(mapStatetoProps,null)(TaskList) ;
