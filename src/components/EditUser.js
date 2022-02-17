import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <form>
          <div className="col-12">
          <input defaultValue={this.props.userEditObject.Name} type="text" className="form-control" Name='Name'   id aria-describedby="helpId" placeholder="Add new task..." />
          </div>
          <div className="col-12">
            <label  htmlFor="floatingTextarea" Name='Description' ><b>Description</b></label>
            <textarea  defaultValue={this.props.userEditObject.Description} className="form-control" placeholder id="floatingTextarea" />
          </div>
          <div className="btn-group">
            <div className="col-12">
            <label htmlFor="myDate1" Name='Due'  ><b>Due Date</b></label>
              <input  defaultValue= {this.props.userEditObject.Due} type="date" id="myDate1" default className="form-control" />
            </div>
            <div className="col-12">
            <label htmlFor="myState" Name='Priority' ><b>Priority</b></label>
              <select defaultValue= {this.props.userEditObject.Priority}  id="myState" className="form-control">
                <option selected>Normal</option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div className="col-12">
            <hr />
            <input type='reset' className="btn btn-block btn-success" onClick={()=>this.props.changeEditUserStatus()} value='Update' ></input> 
          </div>
        </form>
        );
    }
}

export default EditUser;