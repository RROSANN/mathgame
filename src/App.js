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
import { generateX, generateY, generateAnswer } from './actions/index.js';
import { connect } from 'react-redux';

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


  const mapStateToProps = (state) => {
    return {
      x: state.x,
      y: state.y,
      correctAnswer: state.correctAnswer
    }
  }

  const mapDispatchToProps = () => {
    return {
      generateX, 
      generateY,
      generateAnswer
    }
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTime: false,
      startReset: "Start Game",
      displayReset: false,
      displayStart: true,
      correctAnswer: '',
      x: 1+ Math.round(9*Math.random()),
      y: 1+ Math.round(9*Math.random())
  }
}
   /*generateQA = () => {
    this.setState({correctAnswer: this.props.x*this.props.y},
    function(){
      console.log(this.state.correctAnswer);
      console.log(this.props.x);
      console.log(this.props.y);
    });
  }*/ 

  generateQA = () => {
    this.setState({
        x: 1+ Math.round(9*Math.random()),
        y: 1+ Math.round(9*Math.random())
      })
  }

  generateQ = () => {
    this.setState({
      correctAnswer: this.state.x*this.state.y
      })
  }
  

 

  // if click start/reset button
  start = (generateQA) => {
    //if game is on 
    if(1===2){
      //reload page not working, was supposed to go and take from server..but done a new button and fixed that.
      window.location.reload();
    }else{ //if game not on
      this.setState({     //set score to 0
        displayTime: true,  //show show time remaining box
        displayReset: true,
        displayStart: false   //change start button to reset game button
      })
      this.generateQA()
      this.generateQ()
    }
  }




  render() {
    const { timeLeftValue, playing, x, y} = this.state; 
    return (
        <div  className='container'>
          <ScoreBox />
          <Correct />
          <TryAgain />
          <QuestionBox correctAnswer = {this.state.correctAnswer} x = {x} y = {y}/>
          <InformationBox />
          <Choices />
          <StartButton start={this.start} startReset = {this.state.startReset} displayStart = {this.state.displayStart}/>
          <ResetButton refreshPage={this.refreshPage} displayReset = {this.state.displayReset}/>
          <TimeRemaining displayTime = {this.state.displayTime} timeLeftValue = {timeLeftValue} playing = {playing}/>
        </div>
      );
    }
}


 


export default /*connect(mapStateToProps, mapDispatchToProps())*/App;
