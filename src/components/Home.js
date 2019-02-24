import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  test() {
  	console.log(sessionStorage);
  }
  render() {
    return (
		<div style={{overflowY: 'hidden'}}> 
		    <img className="class" src="https://a-static.besthdwallpaper.com/java-programming-language-coding-wallpaper-2560x1600-17042_7.jpg" 
		    style={{position: 'absolute', height: '91vh', width: '100%', filter: 'blur(2px)', 'WebkitFilter': 'blur(2px)'}} alt="bg">
		    </img>
		    <div style={{position: 'relative', color: 'white', top: '20vh', height: '50vh', width: '90vw', left: '5vw'}}> 
		    	<h1>
		       		BAJAX
		    	</h1>
		    	<p><b>Let's Play With Our Games And Make More Exploitations !</b></p>
		    	<Link to="/login" className="btn btn-primary" onClick={this.test}> Play Now ! </Link>
		    </div>
		</div>
		)
	}
}
export default Home;