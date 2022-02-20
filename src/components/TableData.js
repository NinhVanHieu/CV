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
                  <td width='10%'>
                    <input onClick={()=>this.props.changeBulkAction()} type="checkbox" id="flexCheckDefault" />
                  </td>
                  <td align="center" width='70%'>
                   {this.props.Name}
                  </td>
                  <td align="right" width='10%'>
                    <button type="button" className="btn btn-info" onClick={()=>this.editClick()} >Detail</button>  
                  </td>
                  <td align="right" width='10%'>
                  <button type="button" className="btn btn-danger" onClick={(idUser)=>this.deleteButtonClick(this.props.id)} >Remove</button>
                  </td>
                  </tr>
              </tbody>
            </>        
        );
    }
}

export default TableData;