import React, { Component } from 'react';
import TableData from './TableData';
import Action from './Action';


class Table extends Component {
    deleteButtonClick=(idUser)=>{
        this.props.deleteUser(idUser)
    };
    changeBulk=()=>{
        if(this.props.Bulk===true){
            return <Action/>;
        }
    }
           

    mappingData=()=>(
        this.props.DataUserProps.map((value,key)=>(
            <TableData
            Name={value.Name} Description={value.Description} Due={value.Due} Priority={value.Priority} id={value.id}
            editFunClick={(user)=>this.props.editFun(value)} 
            changeEditUserStatus={()=>this.props.changeEditUserStatus()}
            deleteButtonClick={(idUser)=>this.deleteButtonClick(idUser)}
            Bulk={this.props.Bulk} 
            changeBulkAction={()=>this.props.changeBulkAction()}/>
        ))
    )        
    render() {
        return (
            
            <div className="col-12">
                <br/>
            <table className="table"  border="1px" rules="rows">
                    {this.mappingData()}
            </table>
            <br/>
            {this.changeBulk()}
            </div>      
        );
    }
}

export default Table;