import React, {Component} from 'react';
import './App.css';
import TaskForm from './component/TaskForm';
import Control from './component/Control';
import TaskList from './component/TaskList';
import {connect} from 'react-redux';
import * as actions from './Actions/index';




class App extends Component {

  constructor (props){
    super(props);
    this.state = {
      
      //IsForm : false,
      taskEditting : null,
      fillter : {
        name : '',
        status : -1
      },
      key : ''
    }
}
        
                  
      
      clickThem = () =>{
          // this.setState({
          //     IsForm : !this.state.IsForm
          // });
          this.props.ontogger_form();

          // onclose = () =>{
          //   console.log('đã nhận được');
          // }

      }


      onCloseForm = ()=>{
        this.props.onclose_form();
        // this.setState({
        //     IsForm : !this.state.IsForm
        // })
      }
  



      FunctionUpdate = (id) =>{
        var {task} = this.state;
        var index = this.findID(id);
        var taskEditting = task[index];
        this.setState({
          taskEditting : taskEditting
        });
       // console.log(taskEditting);
        this.onshowForm();
      }
      onshowForm = () =>{
        this.setState({
            IsForm : true
        });
      }
       FuctionFillter = (filltername ,fillterStatus) =>{
        fillterStatus = parseInt(fillterStatus , 10);
         
         this.setState({
            fillter :{
              name : filltername.toLowerCase(),
              status : fillterStatus
            }
         });
       }
       OnSearch = (x) =>{
        this.setState({
          key : x.toLowerCase()
        });
       }

    
    render(){
      //Hứng dữ liệu
      var { fillter,key } = this.state;
      var { IsForm} = this.props;
      // if(fillter)
      // {
      //   if(fillter.name)
      //   {
      //     task = task.filter((x) => {
      //       return x.name.toLowerCase().indexOf(fillter.name) !== -1;//hàm indexOf nếu không tìm thấy giá trị sẽ trả về -1

      //   });
      //   }
      // }

      
    //      task = task.filter((x) => {
    //         if(fillter.status === -1){
    //           return x;
    //         }else{
    //           return x.status === (fillter.status === 1 ? true : false);

    //       }
    //     });
    // }if(key){
    //    task = task.filter((x) => {
    //         return x.name.toLowerCase().indexOf(key) !== -1;//hàm indexOf nếu không tìm thấy giá trị sẽ trả về -1

    //     });
    // }

      // console.log(task.status);
      // console.log(fillter);
       var elementForm = IsForm ===true ? <TaskForm task = {this.state.taskEditting}/> : ' ';

        return(
      <div className="container">
            <div className="text-center">
                <h1>Quản Lý Công Việc</h1>
                <hr/>
            </div>
            <div className="row">
                <div className={ IsForm ===true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4': ''}>
                   {elementForm}
                </div>
                <div className={ IsForm  ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                     <button type="button" 
                     className="btn btn-primary"
                     onClick={this.clickThem}>
                         <span className="fa fa-plus mr-5"></span>Thêm Công Việc
                     </button>
                    
                     
                    <div className="row mt-15">
                       <Control onSearch = {this.OnSearch} />
                    </div>
                    <div className="row mt-15">
                        <TaskList 
                         // UpdateStatus = {this.FunctionUpdateStatus}
                          
                          Update1 = {this.FunctionUpdate}
                          onFillter = {this.FuctionFillter}
                        />
                    </div>
                </div>
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
          ontogger_form : () =>{
              dispatch(actions.toggle_form())
          },
          onclose_form : () =>{
            dispatch(actions.close_form())
          }
      };
};

export default connect(mapStatetoProps,mapDispachtoProps)(App) ;

