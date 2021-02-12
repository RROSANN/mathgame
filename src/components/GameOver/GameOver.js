import React from 'react';
import './GameOver.css';
import { connect } from 'react-redux';



class GameOver extends React.Component {



	render(){
		
		return (
			<div className="endgame">
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
		
		
	}
}






export default connect(mapStateToProps, mapDispatchToProps()) (GameOver);