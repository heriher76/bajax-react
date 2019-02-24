import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import '../login.css';
import qs from 'qs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			submitting: false,
			redirect: false
		}
	}

	handleChange = (event) => {
		this.setState({ 
			[event.target.name]: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		sessionStorage.clear();
		this.setState({
			submitting: true
		})
		const data = { 
			email: this.state.email,
			password: this.state.password
		}
		axios.post(`http://localhost/bajax-lumen/html/login`, qs.stringify( data ))
	      .then((response) => {
	      	let responseJSON = response;
	      	if(responseJSON.data.success) {
	      		sessionStorage.setItem('api_token', responseJSON.data.data.api_token);
	      		sessionStorage.setItem('username', responseJSON.data.data.user.name);
	      		sessionStorage.setItem('roles', responseJSON.data.data.permissions.length);
	      	}  
	      	toast.success("You Are Logged In !");
	      	setTimeout(() => {
	      		this.setState({ 
	      			submitting: true,
					redirect: true
	      		});
	      		window.location.href='/';
	      	}, 3000)
	        console.log(response);
	      }).catch((error) => {
	      	toast.error("Something Went Wrong :(");
	      	this.setState({
				submitting: false
			})
	      })
	}

	render() {
		if (this.state.redirect) {
			return (
				<Redirect to={'/'}/>
			)
	    }
	    if (sessionStorage.length !== 0) {
			return (
				<Redirect to={'/challenges'}/>
			)
	    }
		return (
			<div className="container" style={{marginTop: '2vh'}}> 
				<ToastContainer />
				<Card>
				  <Card.Body>
				  	<div className="row">
			  	        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
			  	          <div className="card card-signin my-5">
			  	            <div className="card-body">
			  	              <h5 className="card-title text-center">Sign In</h5>
			  	              <form className="form-signin" onSubmit={this.handleSubmit}>
			  	                <div className="form-label-group">
			  	                  <input type="email" name="email" value={this.state.email} onChange={this.handleChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
			  	                  <label htmlFor="inputEmail">Email address</label>
			  	                </div>
			  	                <div className="form-label-group">
			  	                  <input type="password" name="password" value={this.state.password} onChange={this.handleChange} id="inputPassword" className="form-control" placeholder="Password" required />
			  	                  <label htmlFor="inputPassword">Password</label>
			  	                </div>
			  	                {/*<div className="custom-control custom-checkbox mb-3">
			  	                  <input type="checkbox" className="custom-control-input" id="customCheck1" />
			  	                  <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
			  	                </div>*/}
			  	                {this.state.submitting ?
									<div>
										<b><center>Logging In...</center></b>
									</div>
						          :
			  	                	<button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
						        }
			  	                <br />
			  	                <div className="custom-control custom-checkbox mb-3">
			  	                  <label><Link to="/register">Register Account ?</Link></label>
			  	                </div>
			  	                <hr className="my-4" />
			  	                {/*<button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2" /> Sign in with Google</button>
			  	                <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2" /> Sign in with Facebook</button>*/}
			  	              </form>
			  	            </div>
			  	          </div>
			  	        </div>
			  	      </div>
				  </Card.Body>
				</Card>
			</div>
		);
	}
}
export default Login;