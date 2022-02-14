import React, { Component } from 'react'

export default class Form extends Component {
  state={name: "",phone: ""};

 /* constructor(props) {
    super(props);
  
    this.onChange = this.onChange.bind(this)
  }

  onChange(e){
    console.log("Writing...",e.target.value);
  if(e.target.name==='name'){
this.setState({name:e.target.value})
}
if(e.target.name==='phone'){
  this.setState({phone:e.target.value})
}
  
  this.setState({[e.target.name]:e.target.value})
}*/

  render() {
    const onChangeFunc=(e)=> {this.setState({[e.target.name]:e.target.value})}
      const formInputStyle={
        marginTop: "10px",
        height: "30px",
        lineHeight: "25px",
        width: "400px",
        textİndent: "10px"
      };
      //console.log(this.props)
      const onSubmitFunc=(event)=>{
        event.preventDefault()
        if (this.state.name === '') {
          alert("Name not be blank!!")
        } else {
          console.log("Formmmm onSubmit : Func Child")
        this.props.addContact({... this.state});
        this.setState({name:"", phone:""})
          
        }

        
      }
    return (
      <div>
          <form onSubmit={onSubmitFunc}
           style={{width:"400px",margin:"0 auto", padding:"0"}}>
              
          <input style={formInputStyle} value={this.state.name} onChange={onChangeFunc}  
          name='name' id='name' placeholder='Enter a name...' 
          ></input>
          <br/>
          <input style={formInputStyle} value={this.state.phone} onChange={onChangeFunc}  name='phone' id='phone' placeholder='Enter a name...'></input>
          <button type='submit'>Add</button>
          </form>
      </div>
    )
  }
}
