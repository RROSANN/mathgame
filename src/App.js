
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

function App() {
  return (
    <div  className='container'>
      <ScoreBox />
      <Correct />
      <TryAgain />
      <QuestionBox />
      <InformationBox />
      <Choices />
      <StartReset />
      <TimeRemaining />
      <GameOver />
    </div>
  );
}

export default App;
