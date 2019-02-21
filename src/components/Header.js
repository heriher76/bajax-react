import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import Scoreboard from './Scoreboard.js';
import Challenges from './Challenges.js';
import Login from './Login.js';
import Home from './Home.js';

function NoMatch() {
	return <h1> 404 Not Found ! </h1>
}

class NavBar extends Component {
  render() {
    return (
    	<BrowserRouter>
    		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
		      <Navbar.Brand href="#home">Bajax-CTF</Navbar.Brand>
		      <Navbar.Toggle aria-controls="basic-navbar-nav" />
		      <Navbar.Collapse id="basic-navbar-nav">
		        <Nav className="mr-auto">
		          <Link to="/">Home</Link>
		          <Link to="/scoreboard">Scoreboard</Link>
		          <Link to="/challenges">Challenges</Link>
		        </Nav>
		        <Link to="/login">Login / Register</Link>
		      </Navbar.Collapse>
		    </Navbar>
		    <main>
		    <Switch>
		    	<Route path="/" exact component={Home} />
		    	<Route path="/scoreboard" exact component={Scoreboard} />
		    	<Route path="/challenges" exact component={Challenges} />
		    	<Route path="/login" exact component={Login} />
		    	<Route component={NoMatch} />
		    </Switch>
		    </main>
		    </div>
	    </BrowserRouter>
		)
	}
}
export default NavBar;