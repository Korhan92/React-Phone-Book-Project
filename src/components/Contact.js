//created by rcc snippet 
import React, { Component } from 'react'
import List from './List'
import Form from './Form'

 class Contact extends Component {
     state={
         contacts:[{name:"Name 1",phone:"+123456789"},
         {name:"Name 2",phone:"+123456780"},
         {name:"Name 3",phone:"+123456781"},
         {name:"Name 4",phone:"+123456782"},
         {name:"Name 5",phone:"+123456782"},
        ],
        age:12,
        surname:"Tommy",
        order:"98",
        id:1
     };
  render() {
    const addContact=(data)=>{
      console.log("Formmmm onSubmit : Func Parent Params:",data);
      const {contacts}= this.state
      //console.log("Contacts Old:::",contacts)
      contacts.push(data)
      //console.log("Contacts New:::",contacts)
      
      this.setState({order:data.order})};

      console.log("Contact.js State:::", this.state)
    
      const chngState=()=>{
     
      this.setState({age:21})
      
    };
      return (
      <div>
          <h1>Contacts</h1>
          <List  contacts={this.state.contacts}/>
          <Form addContact={addContact}/>
          <button onClick={chngState}>Change Contact JS State</button>

      </div>
    );
  }
}


export default Contact;