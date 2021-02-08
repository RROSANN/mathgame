import React from 'react';
import  GameOver from '../GameOver/GameOver';
import './TimeRemaining.css';
	

class TimeRemaining extends React.Component {
	constructor(props){
		super(props)
		this.tick = this.tick.bind(this)
		this.state = {
			playing: this.props.playing,
			score: this.props.score,
			seconds: 5,
			showResult: false,
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
			<div style={{ display: (this.props.displayTime === true) ? "block" : "none" }} className="time">
				Time remaining: {this.state.seconds} sec
				<GameOver score={this.state.score} showResult={this.state.showResult}/>	
			 </div>
		);
	}
}

export default TimeRemaining;