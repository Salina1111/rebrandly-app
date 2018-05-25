import React, { Component } from 'react'

import Header from '../Header';

//Matrial-UI component
import { Card, CardActions, CardHeader,CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class CreateLink extends Component{
    alignCenter = {
        height: "100vh",          
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }
    constructor(props){
      super (props)
      this.state = {
        title:'',
        destination : '',
      }
    }
    
    render(){
       return(
           <div>
        <Header/>
        <div style={this.alignCenter}>
        <Card style={this.CardWidth}>
       <CardHeader title={<strong>Create Link </strong>} />
          <CardText>
            <TextField
            hintText="Title" 
            value ={this.state.title}
            onChange = {(e)=> {this.setState({title:e.target.value})} }
            /><br />
            <TextField
            hintText="Destination"
            value={this.state.destination}
            onChange={(e) => {this.setState({destination: e.target.value})}}
            />
            <br />
            <br />
          </CardText>
          <CardActions style={{float: "right"}}>
            <RaisedButton label="Submit" primary={true}  onClick={()=> this.onSubmit()}/>
          </CardActions>
        </Card>
      </div>
      </div>
       )     
    }

     ontitlechange(e){
        this.setState({title:e.target.value})
    }

    ondestinationchange(e){
        this.setState({destination:e.target.value})
    }


  onSubmit(){
    const apikey=sessionStorage.getItem('apikey')
    const data = {
      title: this.state.title,
      destination : this.state.destination,
      
    }

    fetch ('https://api.rebrandly.com/v1/links',{
      method :'POST',
      headers :{
        apikey : apikey,
        'Content-Type' : 'application/json'
      },
      body:JSON.stringify(data)
    })

    .then(response =>{
      if(response.ok){
        response.json()
        .then (links =>{
          this.props.history.push("/Link")
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


export default CreateLink;