import React from 'react';
import './ResetButton.css';

class ResetButton extends React.Component {
	constructor(props){
		super(props);
		this.state = {	
		}
	}
	 refreshPage = () => {
	   window.location.reload(true);
	  }

	render(){
		return (
			<div   onClick={this.refreshPage} style={{ display: (this.props.displayReset === true) ? "block" : "none" }}className="reset grow">
				Reset Game
			 </div>
		);
	}
}

export default ResetButton;

