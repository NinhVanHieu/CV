import React, { Component } from 'react';
import TableData from './TableData';

class Table extends Component {
    deleteButtonClick=(idUser)=>{
        this.props.deleteUser(idUser)
    };
    mappingData=()=>(
        this.props.DataUserProps.map((value,key)=>(
            <TableData editFunClick={(user)=>this.props.editFun(value)} Name={value.Name} Description={value.Description} Due={value.Due} Priority={value.Priority} id={key} changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            deleteButtonClick={(idUser)=>this.props.deleteButtonClick(idUser)} />
        ))
    
    
    )
        
    render() {
        return (
            <div className="col-12">
            <div className="btn-group">
            </div><table className="table ">
                    {this.mappingData()}
                </table>
          </div>          
        );
    }
}

export default Table;