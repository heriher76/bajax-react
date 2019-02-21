import React, { Component } from 'react';
import StickyFooter from 'react-sticky-footer';

class Footer extends Component {
	render() {
		return (
			<div style={{position: 'absolute', bottom: '0px', width: '100%'}}>
				<StickyFooter
				    bottomThreshold={50}
				    normalStyles={{
				    backgroundColor: "#343a40",
				    padding: "2rem",
				    color: "white"
				    }}
				    stickyStyles={{
				    backgroundColor: "rgba(255,255,255,.8)",
				    padding: "2rem"
				    }}
				>
				    Crafted with &#10084; in Bandung, Indonesia 
				</StickyFooter>
			</div>
		);
	}
}
export default Footer;