import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Home extends Component {
  render() {
    return (
		<div> 
		    <img className="class" src="https://a-static.besthdwallpaper.com/java-programming-language-coding-wallpaper-2560x1600-17042_7.jpg" 
		    style={{position: 'absolute', height: '90vh', width: '100%', filter: 'blur(3px)', '-webkit-filter': 'blur(3px)'}} alt="bg">
		    </img>
		    <div style={{position: 'absolute', color: 'white', top: '20vh', left: '5vw'}}> 
		    	<h1>
		       		BAJAX
		    	</h1>
		    	<p>Let's Play With Our Games And Make More Exploitations !</p>
		    	<Button> Play Now ! </Button>
		    </div>
		</div>
		)
	}
}
export default Home;