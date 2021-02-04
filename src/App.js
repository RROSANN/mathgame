import React, { Component } from 'react';
import './App.css';
import 'tachyons';
import ScoreBox from './components/ScoreBox/ScoreBox';
import Correct from './components/Correct/Correct';
import TryAgain from './components/TryAgain/TryAgain';
import QuestionBox from './components/QuestionBox/QuestionBox';
import InformationBox from './components/InformationBox/InformationBox';
import Choices from './components/Choices/Choices';
import StartReset from './components/StartReset/StartReset';
import TimeRemaining from './components/TimeRemaining/TimeRemaining';
import GameOver from './components/GameOver/GameOver';

const initialState = {
  playing: false,
  score: '',
  display: false
}



class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

 something = (event) => {
  this.setState({display: true});
 }
  
  start = (playing, score, display) => {

    if (playing === true) {
        window.location.reload(false);
    } else {
      this.setState({ 
        score: 0,
        display: true
        });

    }

  }

  render() {
  return (
      <div  className='container'>
        <ScoreBox score={this.state.score}/>
        <Correct />
        <TryAgain />
        <QuestionBox />
        <InformationBox />
        <Choices />
        <StartReset  />
        <TimeRemaining style={{ display: true ? "block" : "none" }}/>
        <GameOver />
      </div>
    );
  }
}

export default App;
