import React, { Component } from 'react';

 // Material UI component
 import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
 import FlatButton from 'material-ui/FlatButton';
 import TextField from 'material-ui/TextField';
 
 // Component
 import Header from '../Header';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
 
 class LinkEdit extends Component {

  alignCenter = {
    height: "100vh",          
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  state = {
    id: this.props.match.params.id,
    title: '',
    destination: ''
  }

  render() {
   return (
     <div>
     <Header />
     <div style={this.alignCenter}>
     <Card style={{margin: "20px 10px 0 10px"}}>
     <CardHeader
     title={<strong>Edit Link</strong>}
     />
     <CardText>
     <TextField
     style={{width: "100%"}}
     floatingLabelText="Title"
     value={this.state.title}
     onChange={(e) => {this.setState({title: e.target.value})}}
     /><br />
     <TextField
     style={{width: "100%"}}
     floatingLabelText="Destination URL"
     value={this.state.destination}
     onChange={(e) => {this.setState({destination: e.target.value})}}
     />
     </CardText>
     <CardActions>
     <RaisedButton  label="Submit" secondary={true} onClick={() => this.onSubmit()}/>
     </CardActions>
     </Card>
     </div>
     </div>
     )
 }

 onSubmit(){
    const apikey=sessionStorage.getItem('apikey')
    const data={
      title:this.state.title,
      destination:this.state.destination
    }
  
    fetch (`https://api.rebrandly.com/v1/links/${this.state.id}`,{
      method:'POST' ,
      headers:{
        apikey:apikey,
        'Content-Type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(response =>{
      if(response.ok){
        response.json()
        .then (links =>{
          this.props.history.push("/link")
        })
      }
      else {
        alert(response.statusText)
      }
    })
    
  }
  componentWillMount() {
    const apikey=sessionStorage.getItem('apikey')
  
    fetch (`https://api.rebrandly.com/v1/links/${this.state.id}`,{
      headers:{
        apikey:apikey
      }
    })
    .then(response =>{
      if(response.ok){
        response.json()
        .then (links =>{
          
        this.setState({
          title: links.title,
          destination:links.destination
        })
        })
      }
      else {
        alert(response.statusText)
      }
    })
  
  }
   
  }

  export default LinkEdit;