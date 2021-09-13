import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';







class Control extends Component {
    
    render(){                    
        return(
            <div>
                
                <Search search ={this.props.onSearch}/>
                <Sort/>
                
            </div>
            );
    }
}

export default Control ;
