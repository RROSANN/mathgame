import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import ScoreBox from './components/ScoreBox/ScoreBox';
import Correct from './components/Correct/Correct';
import TryAgain from './components/TryAgain/TryAgain';
import QuestionBox from './components/QuestionBox/QuestionBox';
import InformationBox from './components/InformationBox/InformationBox';
import Choices from './components/Choices/Choices';
import StartButton from './components/StartButton/StartButton';
import TimeRemaining from './components/TimeRemaining/TimeRemaining';
import ResetButton from './components/ResetButton/ResetButton';
import GameOver from './components/GameOver/GameOver';
import { connect } from 'react-redux';


// if click start/reset button
  //if playing is true
    //reload page 
  //if not game on 
    //set score to 0
    //show show time remaining box
    //reduce time by 1sec 
      //check if time is left 
        //yes - continue & drop 1sec
        //no - show gameover
    //change start button to reset game button
    //generate question and answers


//if click answer box
  //if we are playing 
    //if correct
      //correct
        //increase score
        //show correct box for 1 sec
        //generate new question and answers
      //wrong
        //try again box

        
const mapStateToProps = state => {
  return {
    displayTimeRemaining: state.displayTimeRemaining,
    displayGameOver: state.displayGameOver,
    displayStartButton: state.displayStartButton,
    displayResetButton:state.displayResetButton,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    
  }
}


class App extends Component {

  render() {
    const { displayTimeRemaining, displayStartButton, displayResetButton, displayGameOver } = this.props;
    return (
        <div  className='container'>
          <ScoreBox />
          <Correct />
          <TryAgain />
          <QuestionBox />
          <InformationBox />
          <Choices />
          {displayStartButton ? <StartButton  /> : ''}
          {displayResetButton ? <ResetButton  /> : '' }
          {displayTimeRemaining ? <TimeRemaining  /> : '' } 
          {displayGameOver ? <GameOver /> : '' }   
        </div>
      );
    }
}


 


export default connect(mapStateToProps, mapDispatchToProps())(App);
