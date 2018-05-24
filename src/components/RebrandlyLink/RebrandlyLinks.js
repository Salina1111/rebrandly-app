import React, { Component } from 'react';

import {
	Table,
	TableBody,
	TableHeader,
	TableHeaderColumn,
	TableRow,
	TableRowColumn,
} from 'material-ui/Table';

//Material-UI component
import { BottomNavigationItem} from 'material-ui/BottomNavigation';
import EditIcon from 'material-ui/svg-icons/image/edit'

import Header from '../Header';

class RebrandlyLinks extends Component{
	constructor (props)
    {
        super(props)
        this.state = {
            links: []
        }
    
    }
    render(){
    	return(
    		<div>
    		<Header/>
    		<Table>
    		<TableHeader displaySelectAll={false}>
    		<TableRow>
    		<TableHeaderColumn>Title</TableHeaderColumn>
    		<TableHeaderColumn>Destination</TableHeaderColumn>
    		<TableHeaderColumn>Short URL</TableHeaderColumn>
    		<TableHeaderColumn>Action </TableHeaderColumn>
            </TableRow>
    		</TableHeader>
    		<TableBody displayRowCheckbox={false}>
    		{
    			this.state.links.map( link => {
    				return(
        				<TableRow key={link.id}>
        				<TableRowColumn>{link.title}</TableRowColumn>
        				<TableRowColumn>{link.destination}</TableRowColumn>
        				<TableRowColumn>{link.shortUrl}</TableRowColumn>
                        <TableRowColumn>
                        <BottomNavigationItem
                            label="Edit"
                            icon={<EditIcon />}
                            onClick={() => this.props.history.push(`/links/${link.id}/edit`)}
                        />
                        </TableRowColumn>
        				</TableRow>
    				)
    			})
    		}
    		</TableBody>
    		</Table>
    		</div>
    		);
    }

    componentWillMount()
     {
        const apikeySession =sessionStorage.getItem('apikey')
        if(apikeySession){
            this.validapikey(apikeySession)
            .then(response => {
                if(response.ok){
                    response.json()
                    .then(data =>{
                        this.setState({
                        links:data
                    })
                    
                    })
                }
                else
                {
                    alert(response.statusText)
                }
            })    
        }
    }

    validapikey(apikey){
        return fetch('https://api.rebrandly.com/v1/links',
        {
            headers:{apikey:apikey}
        })
    }

}

export default RebrandlyLinks;