import React, { Component } from 'react';

//Material-ui 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

//Components
import Login from './components/Login'
import DashBoard from './components/DashBoard'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import RebrandlyLinks from './components/RebrandlyLink/RebrandlyLinks'
import CreateLink from './components/RebrandlyLink/CreateLink'
import EditLink from './components/RebrandlyLink/EditLink'


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
      <BrowserRouter>
        <Switch>
          <Route path = "/Login" component= {Login}/> 
           <Route exact path="/" render={() => (<Redirect to="/login"/>)}/>
          <Route path = "/DashBoard" component= {DashBoard}/>
          <Route exact path="/" render={() =>(<Redirect to ="/DashBoard"/>)}/>
          <Route exact path ="/Link" component={RebrandlyLinks}/>
          <Route path = "/Link/new" component={CreateLink}/>
          <Route path = "/Link/:id/Edit" component={EditLink} />
          </Switch>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
