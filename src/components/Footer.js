import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';

class Footer extends Component {
	render() {
		return (
			<div style={{'bottom': '0px', width: '100%', paddingTop: '5vh'}}>
				<StickyFooter
				    bottomThreshold={50}
				    normalStyles={{
				    backgroundColor: "#343a40",
				    padding: "2rem",
				    color: "white"
				    }}
				    stickyStyles={{
				    opacity: '0'
				    }}
				>
				    Crafted with &#10084; in Bandung, Indonesia 
				</StickyFooter>
			</div>
		);
	}
}
export default Footer;