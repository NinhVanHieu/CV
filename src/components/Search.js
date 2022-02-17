import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state={
            TempValue:""
        };
    }
    isChange=(event)=>{
        this.setState({
            TempValue:event.target.value
        });
        this.props.getText(this.state.TempValue);
    }  
    isShowEditForm=()=>{
        if(this.props.editUserStatus===true){
            return <EditUser 
            changeEditUserStatus={()=>this.props.changeEditUserStatus()} 
            userEditObject={this.props.userEditObject}/>
        }
    }
    render() {
        return (
            <>
            <div className="col-12">
            <input  onChange={(event)=>this.isChange(event)} className="form-control" name id aria-describedby="helpId" placeholder="Search..." />
            </div>
            {this.isShowEditForm()}
             </>
        );
    }
}
export default Search;