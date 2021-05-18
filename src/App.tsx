import React from 'react';

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
      </header>
    </div>
  );
}

export default App;
