import React, { Component } from 'react';

class EditUser extends Component {
    render() {
        return (
            <form>
          <div className="col-9">
          <input defaultValue={this.props.userEditObject.Name} type="text" className="form-control" name='Name'   id aria-describedby="helpId" placeholder="Add new task..." />

          </div>
          <div className="col-9">
            <label  defaultValue={this.props.userEditObject.Description} htmlFor="floatingTextarea" name='Description' ><b>Description</b></label>
            <textarea className="form-control" placeholder id="floatingTextarea" defaultValue={""} />
          </div>
          <div className="btn-group">
            <div className="col-9">
            <label defaultValue= {this.props.userEditObject.Due} htmlFor="myDate1" name='Due'  ><b>Due Date</b></label>
              <input type="date" id="myDate1" default className="form-control" />
            </div>
            <div className="col-9">
            <label htmlFor="myState" name='Priority' ><b>Priority</b></label>
              <select defaultValue= {this.props.userEditObject.Priority}  id="myState" className="form-control">
                <option selected>Normal</option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div className="col-9">
            <hr />
            <input type='reset' className="btn btn-block btn-success" onClick={()=>this.props.changeEditUserStatus()} value='Update' ></input> 
          </div>
        </form>
        );
    }
}

export default EditUser;