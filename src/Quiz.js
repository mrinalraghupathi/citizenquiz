import React, { useState, useEffect } from 'react';
import questionsData from './civics_questions.json';
import './App.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    generateRandomQuestions();
  }, []);

  const generateRandomQuestions = () => {
    const randomQuestions = [];
    const questionsCopy = [...questionsData];

    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * questionsCopy.length);
      randomQuestions.push(questionsCopy[randomIndex]);
      questionsCopy.splice(randomIndex, 1);
    }

    setQuestions(randomQuestions);
    setCurrentQuestionIndex(0);
    setShowAnswer(false);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setShowAnswer(false);
  };

  const toggleShowAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div>
      <h1>U.S. Citizenship Quiz</h1>
      {questions.length > 0 && (
        <div>
          <p>
            Question {currentQuestionIndex + 1} of {questions.length}
          </p>
          <div className="question-container">
            <p onClick={toggleShowAnswer}>
              {questions[currentQuestionIndex].question}
            </p>
            {showAnswer && (
              <p className="answer">
                Answer: {questions[currentQuestionIndex].answer}
              </p>
            )}
          </div>
          {currentQuestionIndex < questions.length - 1 ? (
            <button onClick={handleNextQuestion}>Next Question</button>
          ) : (
            <button onClick={generateRandomQuestions}>Restart Quiz</button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;