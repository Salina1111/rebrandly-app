import React,  { Component } from 'react';

//Matrial-UI component
import { Card, CardActions, CardHeader,CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {

  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }
  }

  alignCenter = {
    height: "100vh",          
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  cardWidth = {
    width: "500px"
  }

  floatActionButtonRight = {
    float: "right"
  }


  render () {
    return (
      <div style={this.alignCenter}>
        <Card style={this.CardWidth}>
          <CardHeader title="WEMPOWER" />
          <CardText>
            <TextField
            hintText="Email" value={this.state.email}
            onChange={(e)=>this.OnEmailChange(e)}
            /><br />
            <TextField
            hintText="ApiKey"
            type="password"
            value={this.state.apikey}
            onChange={(e)=>this.OnApikeyChange(e)}
            />
            <br />
          </CardText>
          <CardActions style={{float: "right"}}>
            <RaisedButton label="Login" primary={true} onClick={()=>this.onSubmit()}/>
          </CardActions>
        </Card>
      </div>

      )
    }

    OnEmailChange(e){
      this.setState({email:e.target.value})

    }

    OnApikeyChange(e){
      this.setState({apikey:e.target.value})
    }

    onSubmit(){
      fetch('https://api.rebrandly.com/v1/account',
      {
        headers:{apikey:this.state.apikey}
      })

      .then(response=>{
        if(response.ok){
          response.json()
          .then(data=>{
            if(data.email===this.state.email){
              sessionStorage.setItem('apikey',this.state.apikey)
              sessionStorage.setItem('email',this.state.email)
              this.props.history.push('/dashboard')
            }
            
            else
            {
              alert('not authorized user')
            }
          })
        }
      })
    }

    
  }

  export default Login;