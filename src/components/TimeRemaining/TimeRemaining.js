import React from 'react';

import './TimeRemaining.css';
import { displayGO, hideTimeRemaining } from '../../actions/index.js';
import { connect } from 'react-redux';

	const mapStateToProps = (state) => {
		return {
			displayGameOver: state.displayGameOver
		}
	}

	const mapDispatchToProps = () => {
		return {
			displayGO,
			hideTimeRemaining		
		}
	}

	

class TimeRemaining extends React.Component {
	constructor(props){
		super(props)
		this.tick = this.tick.bind(this)
		this.state = {
			seconds: 60,
		}
	} 

  	componentDidMount(){
	    this.timer = setInterval(this.tick, 1000);
	  }

	  tick(){
	    if (this.state.seconds > 0) {
	      this.setState({seconds: this.state.seconds - 1})
	    } else {
	      clearInterval(this.timer);
	      this.props.displayGO()
	      this.props.hideTimeRemaining()
	    }
  	}
  	
	render(){
		return (
			 <div  className="time">
				Time remaining: {this.state.seconds} sec		
			 </div> 
		);
	}
}






export default connect(mapStateToProps, mapDispatchToProps()) (TimeRemaining);