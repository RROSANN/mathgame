import React from 'react';
import './GameOver.css';


class GameOver extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			score: this.props.score,
			showResult: this.props.showResult
		}
	}

	render(){
		
		return (
			<div style={{ display: (this.props.showResult === true) ? "block" : "none" }}className="endgame">
				<p>Game Over</p>
				<p>Your score is {this.state.score}</p>
			 </div>
		);
	}
}

export default GameOver;