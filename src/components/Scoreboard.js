import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Redirect } from 'react-router-dom';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

class ScoreBoard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			players: []
		}
	}

	componentDidMount() {
	  	axios.get(`http://localhost/bajax-lumen/html/scoreboard`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		players: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("You Must Login First :(");
		  })
	}

	indexN(cell, row, enumObject, index) {
	    return (<div>{index+1}</div>) 
	}

	render() {
		if (sessionStorage.length === 0) {
			return (
				<Redirect to={'/login'}/>
			)
	    }
		return (
			<div className="container">
				<ToastContainer />
				<center><u><b><h1> ScoreBoard </h1></b></u></center><br />
				<BootstrapTable data={this.state.players} striped search pagination hover>
				  <TableHeaderColumn dataField="any" dataFormat={this.indexN} isKey width='80'>#</TableHeaderColumn>
				  <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
				  <TableHeaderColumn dataField='email' dataSort={true}>Email</TableHeaderColumn>
				  <TableHeaderColumn dataField='website' dataSort={true}>Website</TableHeaderColumn>
				  <TableHeaderColumn dataField='point' dataSort={true}>Points</TableHeaderColumn>
				</BootstrapTable>,
			</div>
		);
	}
}
export default ScoreBoard;