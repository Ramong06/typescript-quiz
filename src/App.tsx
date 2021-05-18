import React from 'react';
import QuestionCard from "./components/QuestionCard";

const App = () => {

  const startQuiz = async () => {
        
  }
  
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>TYPESCRIPT QUIZ</h1>
        <button className="startBtn" onClick={startQuiz}>START</button>
        <p className="score">SCORE:</p>
        <p className="loading">LOADING QUIZ...</p>
        <QuestionCard />
        <button className="nextQuestion" onClick={nextQuestion}>NEXT</button>
      </header>
    </div>
  );
}

export default App;
