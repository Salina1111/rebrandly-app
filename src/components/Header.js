import React , {Component} from 'react';

//Material-ui Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import AccountIcon from './AccountIcon';
import {Link} from 'react-router-dom';

class Header extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            open:false,
            email:''
        }
    }

    link = {
        textDecoration:"none"
    }

    render(){
        return(
            <div>
                <AppBar
                   title="Welcome To WEMPOWER"
                   onLeftIconButtonClick = {() => this.toggleSidebar()}
                   iconElementRight={<AccountIcon email={this.state.email} />}
                />
                <Drawer
                     open= {this.state.open}
                     docked={false}
                     onRequestChange={()=>this.toggleSidebar()}
                >
                    <MenuItem><Link style={this.link} to="/DashBoard"> Home </Link></MenuItem>
                    <MenuItem><Link style={this.link} to= "/Link"> Link </Link></MenuItem>
                    <MenuItem><Link style={this.link} to="/Link/new">CreateLink </Link> </MenuItem>
                </Drawer>
            </div>

        );  
    }

    toggleSidebar(){
        this.setState({open: !this.state.open})
    }
    
    componentWillMount() {
        this.setState({
          email: sessionStorage.getItem('email')
        })
      }
}

export default Header;