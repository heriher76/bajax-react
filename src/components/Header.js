import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Scoreboard from './Scoreboard.js';
import Challenges from './Challenges.js';
import CreateChallenge from './CreateChallenge.js';
import Login from './Login.js';
import Home from './Home.js';
import Register from './Register.js';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

class NavBar extends Component {
  constructor(props) {
  	super(props);
  	this.state = {
  		redirect: false,
  		logged: false
  	}
  }

  logout = () => {
  	axios.get(`http://localhost/bajax-lumen/html/logout`, { 'headers': { 'Authorization': sessionStorage.api_token } })
	  .then((response) => {
		sessionStorage.clear();
	  	toast.success("You Are Logged Out !");
	  	setTimeout(() => {
	  		this.setState({ 
				redirect: true,
				logged: true
	  		})
	  		window.location.href='/';
	  	}, 3000)
	  }).catch((error) => {
	  	toast.error("Something Went Wrong :(");
	  })
  }

  render() {
    return (
    	<BrowserRouter>
    		<div style={{}}>
    		<ToastContainer />
			<Navbar bg="dark" variant="dark" expand="lg">
		      <Navbar.Brand href="/">
		      <img
				  alt=""
				  src="/img/logo-bajax.jpg"
				  width="30"
				  height="30"
				  className="d-inline-block align-top"
				/>
		      Bajax-CTF
		      </Navbar.Brand>
		      <Navbar.Toggle aria-controls="basic-navbar-nav" />
		      <Navbar.Collapse id="basic-navbar-nav">
		        <Nav className="mr-auto">
		          <Link to="/" className="btn btn-primary">Home</Link>
		          <Link to="/scoreboard" className="btn btn-primary">Scoreboard</Link>
		          <Link to="/challenges" className="btn btn-primary">Challenges</Link>
		        </Nav>
		        {
		        	(sessionStorage.length !== 0) ? 
		        	<div className="btn btn-danger" onClick={this.logout}>Logout</div> 
		        	:
		        	<Link to="/login" className="btn btn-danger">Login / Register</Link>
		        }
		      </Navbar.Collapse>
		    </Navbar>
		    <main>
		    <Switch>
		    	<Route path="/" exact component={Home} />
		    	<Route path="/scoreboard" exact component={Scoreboard} />
		    	<Route path="/challenges" exact component={Challenges} />
		    	<Route path="/challenges/create" exact component={CreateChallenge} />
		    	<Route path="/login" exact component={Login} />
		    	<Route path="/register" exact component={Register} />
		    	
		    </Switch>
		    </main>
		    </div>
	    </BrowserRouter>
		)
	}
}
export default NavBar;