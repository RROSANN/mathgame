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

// if click start/reset button
  //if game is on 
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      score: '',
      displayTime: false,
      startReset: "Start Game",
      displayReset: false,
      displayStart: true
  }
}


  // if click start/reset button
  start = (event, playing, score, refreshPage, startCountDown, timeLeft, timeLeftValue) => {
    //if game is on 
    if(playing === true){
      //reload page not working, was supposed to go and take from server..but done a new button and fixed that.
      window.location.reload();
    }else{ //if game not on
      this.setState({
        playing: true,
        score: 0,     //set score to 0
        displayTime: true,  //show show time remaining box
        startReset: "Start Game",
        displayReset: true,
        displayStart: false    //change start button to reset game button
      })      
    }

  }

  render() {
    const { timeLeftValue, playing } = this.state; 
    return (
        <div  className='container'>
          <ScoreBox score={this.state.score}/>
          <Correct />
          <TryAgain />
          <QuestionBox />
          <InformationBox />
          <Choices />
          <StartButton start={this.start} startReset = {this.state.startReset} displayStart = {this.state.displayStart}/>
          <ResetButton refreshPage={this.refreshPage} displayReset = {this.state.displayReset}/>
          <TimeRemaining displayTime = {this.state.displayTime} timeLeftValue = {timeLeftValue} playing = {playing}/>
        </div>
      );
    }
}

export default App;
