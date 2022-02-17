import React, { Component } from 'react';
import './../App.css';

import Add from './Add';
import Head from './Head';
import Search from './Search';
import Table from './Table';
import DataUser from './Data.json';
import TodoList from '../TodoList';

const { v4: uuidv4 } = require('uuid');

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
  getNewUserData=(Name,Description,Due,Priority)=>{
    var item={};
    item.id=uuidv4(); 
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
  changeBulkAction=()=>{
    this.setState({
      Bulk: !this.state.Bulk
    });
  }

  //  var NewData=this.state.data.filter(new => new.id !== idUser);
  //   this.setState({
  //     data:NewData
  //    });
  // console.log(temData);
  // deleteUser=(idUser)=>{
  //   //console.log(idUser);
  //   var temData=this.state.data;
  //    temData.forEach((value,key)=>{
  //      if({key}===idUser){
  //        //console.log(value.Name);
  //        temData.delete()
  //      }
  //      this.setState({
  //        data:temData
  //      });
  //    })
  //    }

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
      <table border="1px" width="100%">
  <tbody><tr>
      <td>
      <Head/>
      <Add 
      NewAdd={(Name,Description,Due,Priority)=>this.getNewUserData(Name,Description,Due,Priority)}/>
      </td>
      <td>
          <TodoList/>
          <Search 
          getText={(dl)=>this.getTextSearch(dl)}    
          editUserStatus={this.state.editUserStatus} 
          changeEditUserStatus={()=>this.changeEditUserStatus()}
          userEditObject={this.state.userEditObject}  />
          <Table 
          DataUserProps={ketqua} 
          editFun={(user)=>this.editUser(user)}         
          changeEditUserStatus={()=>this.changeEditUserStatus()}
          deleteUser={(idUser)=>this.deleteUser(idUser)}
          Bulk={this.state.Bulk}
          changeBulkAction={()=>this.changeBulkAction()}/>
        
      </td>
      </tr></tbody></table>
      </>
    );
  }
}
export default App;
