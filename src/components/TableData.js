import React, { Component } from 'react';

class TableData extends Component {
  editClick=()=>{
    this.props.editFunClick();
    this.props.changeEditUserStatus();
  };
  deleteButtonClick=(idUser)=>{
    this.props.deleteButtonClick(idUser)
  };
    render() {
        return (
            <>
            <tbody><tr>
                  <td>
                    <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefault" />
                  </td>
                  <td align="center">
                   {this.props.Name}
                  </td>
                  <td align="right">
                    <button type="button" className="btn btn-info" onClick={()=>this.editClick()} >Detail</button>
                    <button type="button" className="btn btn-danger" onClick={(idUser)=>this.deleteButtonClick(this.props.id)} >Remove</button>
                  </td>
                  </tr>
              </tbody>
            </>
          
        );
    }
}

export default TableData;