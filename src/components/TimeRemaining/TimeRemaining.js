import React from 'react';
import  GameOver from '../GameOver/GameOver';
import './TimeRemaining.css';
import { displayTimeRemaining, hideTimeRemaining } from '../../actions/index.js';
import { connect,useDispatch } from 'react-redux';



	

class TimeRemaining extends React.Component {
	constructor(props){
		super(props)
		this.tick = this.tick.bind(this)
		this.state = {
			score: this.props.score,
			displayTime: this.props.displayTime,
			seconds: 60,
			showResult: false,
			deleteTime: true
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
	      this.setState({
	      	showResult: true
	      })
	    }
  	}
  	

	render(){
		return (
			 <div  style={{ display: (this.props.displayTime === true) ? "block" : "none" }}className="time">
				Time remaining: {this.state.seconds} sec
				<GameOver showResult={this.state.showResult}/>	
			 </div> 
		);
	}
}

	const mapStateToProps = (state) => {
		return {
			displayTimeRemaining: state.displayTimeRemaining
		}
	}

	const mapDispatchToProps = () => {
		return {
			displayTimeRemaining, 
			hideTimeRemaining
		}
	}




export default connect(mapStateToProps, mapDispatchToProps()) (TimeRemaining);