import React,{Component} from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class Body extends Component
{
    
    render(){
        return(
        <div>
		 <Table>
                <TableHeader displaySelectAll={false}>
                <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>Name</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                </TableRow>
                </TableHeader>

                <TableBody displayRowCheckbox={false}>
                <TableRow>
                    <TableRowColumn>1</TableRowColumn>
                    <TableRowColumn>John Smith</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>

                <TableRow>
                    <TableRowColumn>2</TableRowColumn>
                    <TableRowColumn>Randal White</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>

                <TableRow>
                    <TableRowColumn>3</TableRowColumn>
                    <TableRowColumn>Stephanie Sanders</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>

                <TableRow>
                    <TableRowColumn>4</TableRowColumn>
                    <TableRowColumn>Steve Brown</TableRowColumn>
                    <TableRowColumn>Employed</TableRowColumn>
                </TableRow>

                <TableRow>
                    <TableRowColumn>5</TableRowColumn>
                    <TableRowColumn>Christopher Nolan</TableRowColumn>
                    <TableRowColumn>Unemployed</TableRowColumn>
                </TableRow>
                
                </TableBody>
            </Table>
            </div>
		);
	}
}

export default Body;