import React, { useState, useEffect } from 'react';
import questionsData from './civics_questions.json';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [revealedAnswers, setRevealedAnswers] = useState({});

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
    setRevealedAnswers({});
  };

  const handleRevealAnswer = (index) => {
    setRevealedAnswers({ ...revealedAnswers, [index]: true });
  };

  return (
    <div>
      <h1>U.S. Citizenship Quiz</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <span onClick={() => handleRevealAnswer(index)}>
              {index + 1}. {question.question}
            </span>
            {revealedAnswers[index] && <span>: <b>{question.answer}</b></span>}
          </li>
        ))}
      </ul>
      <button onClick={generateRandomQuestions}>Generate New Questions</button>
    </div>
  );
};

export default Quiz;
