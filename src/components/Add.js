import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state={  
        Name:"",
        Description:"",
        Due:"",
        Priority:"",
        id:"",
        age:""
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
          <div className="col-12">
            <br/>
          <input type="text" className="form-control" name='Name'  onChange={(event)=>this.isChange(event)}  placeholder="Add new task..." required/>
          </div>
          <div className="col-12">
            <br/>
            <label htmlFor="floatingTextarea" ><b>Description</b></label>
            <textarea name='Description' onChange={(event)=>this.isChange(event)} className="form-control" rows='5' id="floatingTextarea"/>
          </div>
          <div className="btn-group col-12" >
            <div className="col-6">
            <br/>
            <label htmlFor="myDate1"><b>Due Date</b></label>
              <input type="date" name='Due' onChange={(event)=>this.isChange(event)} id="myDate1" className="form-control" />
            </div>
            <div className="col-6">
            <br/>
            <label htmlFor="myState" ><b>Priority</b></label>
              <select name='Priority'  onChange={(event)=>this.isChange(event)} id="myState" className="form-control">
                <option>Normal</option>
                <option>Low</option>
                <option>High</option>
              </select>
            </div>
            
          </div>
          <div className="col-12">
            <br/>
            <br/>
            <input type='reset' className="btn btn-block btn-success" value='Add' onClick={(Name,Description,Due,Priority)=>this.props.NewAdd(this.state.Name, this.state.Description, this.state.Due, this.state.Priority)}></input> 
          </div>
          <br/>
        </form>
        );
    }
}

export default Add;