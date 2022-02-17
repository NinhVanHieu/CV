import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state={  
        Name:"",
        Description:"",
        Due:"",
        Priority:""
        }
    }
    isChange=(event)=>{
        const Name=event.target.name;
        const value=event.target.value;
        this.setState({
          [Name]:value
        });     
    }
     render() {
        return (
        <form>
          <div className="col-9">
          <input type="text" className="form-control" name='Name'  onChange={(event)=>this.isChange(event)} id aria-describedby="helpId" placeholder="Add new task..." />
          </div>
          <div className="col-9">
            <label htmlFor="floatingTextarea" ><b>Description</b></label>
            <textarea name='Description'  onChange={(event)=>this.isChange(event)} className="form-control" placeholder id="floatingTextarea" defaultValue={""} />
          </div>
          <div className="btn-group">
            <div className="col-9">
            <label htmlFor="myDate1"  ><b>Due Date</b></label>
              <input type="date" name='Due'  onChange={(event)=>this.isChange(event)} id="myDate1" default className="form-control" />
            </div>
            <div className="col-9">
            <label htmlFor="myState" ><b>Priority</b></label>
              <select name='Priority'  onChange={(event)=>this.isChange(event)} id="myState" className="form-control">
                <option selected>Normal</option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div className="col-9">
            <hr />
            <input type='reset' className="btn btn-block btn-success" value='Add' onClick={(Name,Description,Due,Priority)=>this.props.NewAdd(this.state.Name, this.state.Description, this.state.Due, this.state.Priority)}></input> 
          </div>
        </form>
        );
    }
}

export default Add;