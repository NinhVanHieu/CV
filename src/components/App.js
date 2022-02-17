import React, { Component } from 'react';
import './../App.css';
import Action from './Action';
import Add from './Add';
import Head from './Head';
import Search from './Search';
import Table from './Table';

import DataUser from './Data.json';
import TodoList from '../TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:DataUser,
      SearchText:'',
      userEditObject:{}
    };
  }
  changeEditUserStatus=()=>{
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }
  deleteUser=(idUser)=>{
    console.log(idUser)
     };
   
  getNewUserData=(Name,Description,Due,Priority)=>{
    var item={};
    item.Name=Name;
    item.Description=Description;
    item.Due=Due;
    item.Priority=Priority;
    var items=this.state.data;
   
    items.push(item);
    this.setState({
      data:items
    });
  }

  editUser=(user)=>{
    console.log('Đã kết nối');
    this.setState({
      userEditObject:user
    });
    console.log(user)
  }
  getTextSearch=(dl)=>{
    this.setState({
      SearchText:dl
    });
    var ketqua=[];
    this.state.data.forEach((content)=>{
      if(content.Name.indexOf(this.state.SearchText) !== -1){
        ketqua.push(content);
         // this.setState({
        //  data:ketqua
        //});
      };
    })
  
}
    
  render() {
  
   
    return (
      <>
      <table border="1px" width="100%">
  <tbody><tr>
      <td>
        <hr/>
      <Head/>
      <Add NewAdd={(Name,Description,Due,Priority)=>this.getNewUserData(Name,Description,Due,Priority)}/>
      </td>
      <td>
          <hr/>
          <TodoList/>
          <Search userEditObject={this.state.userEditObject}
          getText={(dl)=>this.getTextSearch(dl)} editUserStatus={this.state.editUserStatus} changeEditUserStatus={()=>this.changeEditUserStatus()} />
          <Table deleteUser={(idUser)=>this.deleteUser()}
          editFun={(user)=>this.editUser(user)} DataUserProps={this.state.data} changeEditUserStatus={()=>this.changeEditUserStatus()}/>
         
          <Action/>
      </td>
      </tr></tbody></table>
      </>
    );
  }
}

export default App;
