import React, { Component } from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

class CreateChallenge extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			note: '',
			point: '',
			flag: ''
		}
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const data = { 
			name: this.state.name,
			note: this.state.note,
			point: this.state.point, 
			flag: this.state.flag
		}
		console.log(qs.stringify(data));
		axios.post(`http://localhost/bajax-lumen/html/challenge/store`, qs.stringify( data ), { 'headers': { 'Authorization': sessionStorage.api_token } })
	      .then(res => {
	      	toast.success("Add Challenge Successfully !");
	      	setTimeout(() => {
	      		window.location.href='/challenges';
	      	}, 3000)
	      }).catch(err => {
	      	toast.error("Something Went Wrong :( ");
	      });
	}

	render() {
		return (
			<div className="container">
				{
					(sessionStorage.roles !== '17') ?
					<Redirect to="/challenges" />
					: null
				}
				<ToastContainer />
				<center><u><b><h1> Create Challenges </h1></b></u></center><br />
				<Form onSubmit={this.handleSubmit}>
				  <Form.Group as={Row} controlId="formHorizontalName">
				    <Form.Label column sm={2}>
				      Name
				    </Form.Label>
				    <Col sm={10}>
				      <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange} />
				    </Col>
				  </Form.Group>

				  <Form.Group as={Row} controlId="formHorizontalNote">
				    <Form.Label column sm={2}>
				      Note
				    </Form.Label>
				    <Col sm={10}>
				      <Form.Control type="text" placeholder="Note" name="note" onChange={this.handleChange} />
				    </Col>
				  </Form.Group>

				  <Form.Group as={Row} controlId="formHorizontalPoint">
				    <Form.Label column sm={2}>
				      Point
				    </Form.Label>
				    <Col sm={10}>
				      <Form.Control type="number" placeholder="Point" name="point" onChange={this.handleChange} />
				    </Col>
				  </Form.Group>

				  <Form.Group as={Row} controlId="formHorizontalFlag">
				    <Form.Label column sm={2}>
				      Flag
				    </Form.Label>
				    <Col sm={10}>
				      <Form.Control type="text" placeholder="Flag" name="flag" onChange={this.handleChange} />
				    </Col>
				  </Form.Group>

				  <Form.Group as={Row} controlId="formHorizontalFlag">
				    <Form.Label column sm={2}>
				      File
				    </Form.Label>
				    <Col sm={2}>
				      <Form.Control type="file" name="file1" />
				    </Col>
				    <Col sm={2}>
				      <Form.Control type="file" name="file2" />
				    </Col>
				    <Col sm={2}>
				      <Form.Control type="file" name="file3" />
				    </Col>
				    <Col sm={2}>
				      <Form.Control type="file" name="file4" />
				    </Col>
				  </Form.Group>

				  <Form.Group as={Row}>
				    <Col sm={{ span: 10, offset: 2 }}>
				      <Button type="submit">Sign in</Button>
				    </Col>
				  </Form.Group>
				</Form>;
			</div>
		);
	}
}
export default CreateChallenge;