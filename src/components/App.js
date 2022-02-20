import React, { Component } from 'react';
import './../App.css';

import Add from './Add';
import Head from './Head';
import Search from './Search';
import Table from './Table';
import DataUser from './Data.json';
import TodoList from './TodoList';

import { v1 as uuidv1 } from 'uuid';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:DataUser,
      SearchText:'',
      editUserStatus:false,
      userEditObject:{},
      Bulk:false
    };
  }
  
   componentWillMount() {
     // if(localStorage.getItem('userData')===null){
       localStorage.setItem('userData',JSON.stringify(DataUser));
    //};
    // esle{
    //   var temp=JSON.parse(localStorage.getItem('userData'));
    //    this.setState({
    //      data:temp
    //    });
    //  }
   };
  getNewUserData=(Name,Description,Due,Priority)=>{
    var item={};
    item.id=uuidv1(); 
    item.Name=Name;
    item.Description=Description;
    item.Due=Due;
    item.Priority=Priority;
    var items=this.state.data;
    items.push(item);
    this.setState({
      data:items
    });
    localStorage.setItem('userData',JSON.stringify(items));
  }
  getTextSearch=(dl)=>{
    this.setState({
      SearchText:dl
    });
    
}  
  changeEditUserStatus=()=>{
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  editUser=(user)=>{
    //console.log('Đã kết nối');
    this.setState({
      userEditObject:user
    });
    //console.log(user)
  }
  getUserEditInfoApp=(info)=>{
    this.state.data.forEach((value,key)=>{
      if(value.id===info.id){
        value.Name=info.Name;
        value.Description=info.Description;
        value.Due=info.Due;
        value.Priority=info.Priority;
      }
    })
    localStorage.setItem('userData',JSON.stringify(this.state.data));
  }
  changeBulkAction=()=>{
    this.setState({
      Bulk: !this.state.Bulk
    });
  }
  deleteUser=(idUser)=>{
     var NewData=this.state.data.filter(NewItem => NewItem.id !== idUser);
      this.setState({
        data:NewData
       });

     localStorage.setItem('userData',JSON.stringify(NewData));
   }

  render() {  
    var ketqua=[];
    this.state.data.forEach((content)=>{
      if(content.Name.indexOf(this.state.SearchText) !== -1){
        ketqua.push(content);
         // this.setState({
        //  data:ketqua
        //});
      };
    })  
    return (
      <>
      <table border="1px" width='90%' align='center' rules='cols'>
      <thead>
      <tr><th><Head/></th>
        <th><TodoList/></th></tr></thead> 
      <tbody>
      <tr><td width='30%' valign="top">
      <Add 
      NewAdd={(Name,Description,Due,Priority)=>this.getNewUserData(Name,Description,Due,Priority)}/>
      </td>
      <td width='40%'valign="top">         
          <Search 
          getText={(dl)=>this.getTextSearch(dl)}    
          editUserStatus={this.state.editUserStatus} 
          changeEditUserStatus={()=>this.changeEditUserStatus()}
          userEditObject={this.state.userEditObject} 
          getUserEditInfoApp={(info)=>this.getUserEditInfoApp(info)} />
          <Table 
          DataUserProps={ketqua} 
          editFun={(user)=>this.editUser(user)}         
          changeEditUserStatus={()=>this.changeEditUserStatus()}
          deleteUser={(idUser)=>this.deleteUser(idUser)}
          Bulk={this.state.Bulk}
          changeBulkAction={()=>this.changeBulkAction()}/>
     </td></tr></tbody></table>
      </>
    );
  }
}
export default App;
