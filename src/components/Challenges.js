import React, { Component } from 'react';
import { Card, Button, Tabs, Tab } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

class Challenges extends Component {
	constructor(props) {
		super(props);
		this.state = {
			challenges: []
		}
	}

	componentDidMount() {
	  	axios.get(`http://localhost/bajax-lumen/html/challenge`, { 'headers': { 'Authorization': sessionStorage.api_token } })
		  .then((response) => {
		  	console.log(response.data.data);
		  	this.setState({
		  		challenges: response.data.data
		  	})
		  }).catch((error) => {
		  	toast.error("You Must Login First :(");
		  })
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
				<center><u><b><h1> Challenges </h1></b></u></center><br />
				<div className="row">
					{ this.state.challenges.map((challenge,i) => 
					<div className="col-md-4" style={{border: 'solid 1px'}} key={i} > 
						<Tabs defaultActiveKey="info" id="uncontrolled-tab-example">
						  <Tab eventKey="info" title="Info">
						      <Card.Body id="link">
						        <Card.Title>{ challenge.data.name }</Card.Title>
						        <Card.Text>
						        	{ challenge.data.note }
						        </Card.Text>
						    	<div className="row">
						        	{ (challenge.data.file1) ?
						    	    <div className="col-md-6">
						    	    	<Button variant="primary">Attachment 1</Button>
						    	  	</div>
						    	  	 : null
						    		}
						    	  	{ (challenge.data.file2) ?
						    	    <div className="col-md-6">
						    	    	<Button variant="primary">Attachment 2</Button>
						    	  	</div>
						    	  	 : null
						    		}
						    		{ (challenge.data.file3) ?
						    	    <div className="col-md-6">
						    	    	<Button variant="primary">Attachment 3</Button>
						    	  	</div>
						    	  	 : null
						    		}
						    		{ (challenge.data.file4) ?
						    	    <div className="col-md-6">
						    	    	<Button variant="primary">Attachment 4</Button>
						    	  	</div>
						    	  	 : null
						    		}
						    	</div>
						      </Card.Body>
						  </Tab>
						  <Tab eventKey="flag" title="Flag">
						    <form>
						    	<center><h4> Submit Flag </h4></center>
						    	<p> *Format = BAJAX{'{'}a-zA-Z0-9{'}'}</p>
						    	<input type="text" name="flag" className="form-control" />
						    	<center><button type="submit" className="btn btn-success">Submit</button></center>
						    </form>
						  </Tab>
						</Tabs>;
					</div>
					) }
				</div>
			</div>
		);
	}
}
export default Challenges;