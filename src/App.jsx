import { useState } from 'react'
import Board from './board.jsx'
import './App.css'

function App() {
  
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] =useState(0);
  const [reset, setReset] = useState(true)

  const  increaseScore = () => {
    setScore(() => score + 1);
    setReset(true);
  }
  const endRound = () =>{
    if (score > highScore){
      setHighScore(score)
    }
    setScore(0)
    setReset(false)
  }

  return(
    <div className='app'>
      <div className='header-left'>
      <h1 >Pokemon Memory</h1>
      </div>
      <div className='header-right'>
      <p>Current score: {score}</p>
      <p>Highscore: {highScore}</p>
      </div>
      <Board 
      reset={reset}
      increaseScore={increaseScore}
      endRound={endRound}
       />
    </div>
  )


}

export default App
