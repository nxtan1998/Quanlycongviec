import React, {Component} from 'react';


class Search extends Component {
        constructor (props){
        super(props);
        this.state = {
            key : ''
        }
    }
    onChange = (event) =>{
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name] : value
        });
    }
    Search = () =>{
        this.props.search(this.state.key);
    }
    
    render(){ 
        var {key} = this.state;                  
        return(
            
                 <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Nhập từ khóa..."
                                name ="key"
                                value ={key}
                                onChange = {this.onChange}

                                 />
                                <span className="input-group-btn">
                                            <button className="btn btn-primary" type="button" 
                                                onClick={this.Search}

                                            >
                                                <span className="fa fa-search mr-5"></span>Tìm
                                </button>
                                </span>
                            </div>
                 </div>
                 
            
            );
    }
}

export default Search ;
