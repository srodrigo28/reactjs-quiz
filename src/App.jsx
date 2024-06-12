import './App.css'
import { useContext } from 'react'
import { QuizContext } from './context/quiz'

import Welcome from './components/Welcome'
import Question from './components/Question'

function App() {
  const [quizState, dispatch] = useContext(QuizContext)

  return (
    <div className='App'>
      <h2>Quiz de Programação</h2>
      {quizState.gameStage === 'Start' && <Welcome />  }
      {quizState.gameStage === 'Playing' && <Question />  }
    </div>
  )
}

export default App