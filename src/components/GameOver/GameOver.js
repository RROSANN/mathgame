import React from 'react';
import './GameOver.css';
import { connect } from 'react-redux';
import { resetScore } from '../../actions/index.js';



class GameOver extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			showResult: this.props.showResult
		}
	}


	render(){
		
		return (
			<div style={{ display: (this.props.showResult === true) ? "block" : "none" }}className="endgame">
				<p>Game Over</p>
				<p>Your score is {this.props.score}</p>
			 </div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		score: state.score
	}
}

const mapDispatchToProps = () => {
	return {
		resetScore
		
	}
}






export default connect(mapStateToProps, mapDispatchToProps()) (GameOver);