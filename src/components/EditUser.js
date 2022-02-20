import React, { Component } from 'react';

class EditUser extends Component {
  constructor(props) {
    super(props);
      this.state={
        id:this.props.userEditObject.id,
        Name:this.props.userEditObject.Name,
        Description:this.props.userEditObject.Description,
        Due:this.props.userEditObject.Due,
        Priority:this.props.userEditObject.Priority
      }
  }
    isChange=(event)=>{
    const Name=event.target.name;
    const value=event.target.value;
    this.setState({
      [Name]:value
    })
  }
  saveButton=()=>{
    var info={};
    info.id=this.state.id;
    info.Name=this.state.Name;
    info.Description=this.state.Description;
    info.Due=this.state.Due;
    info.Priority=this.state.Priority;
    this.props.getUserEditInfo(info);
    this.props.changeEditUserStatus();
  }
    render() {
        return (
          <form>
            <br/>
          <div className="col-12">
            <input onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.Name} type="text" className="form-control" name='Name' placeholder="Add new task..." />
          </div>
          <div className="col-12">
            <br/>
            <label  htmlFor="floatingTextarea" ><b>Description</b></label>
            <textarea name='Description'  onChange={(event)=>this.isChange(event)} defaultValue={this.props.userEditObject.Description} className="form-control" rows='5' id="floatingTextarea" />
          </div>
          
          <div className="col-12 btn-group ">
          <div className="col-6">
            <br/>
            <label htmlFor="myDate1"><b>Due Date</b></label>
            <input name='Due' onChange={(event)=>this.isChange(event)} defaultValue= {this.props.userEditObject.Due} type="date" id="myDate1" default className="form-control" />
          </div>
          <div className="col-6">
            <br/>
            <label htmlFor="myState"><b>Priority</b></label>
              <select name='Priority' onChange={(event)=>this.isChange(event)} defaultValue= {this.props.userEditObject.Priority}  id="myState" className="form-control">
                <option selected>Normal</option>
                <option>Low</option>
                <option>High</option>
              </select>
          </div>
          </div>
          
          <div className="col-12">
            <br />
            <input type='reset' className="btn btn-block btn-success" onClick={()=>this.saveButton()} value='Update' ></input> 
          </div>
        </form>
        );
    }
}

export default EditUser;