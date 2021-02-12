import React from 'react';
import './ResetButton.css';

class ResetButton extends React.Component {
	
	 refreshPage = () => {
	   window.location.reload(true);
	  }

	render(){
		return (
			<div onClick={this.refreshPage} className="reset grow">
				Reset Game
			 </div>
		);
	}
}

export default ResetButton;

