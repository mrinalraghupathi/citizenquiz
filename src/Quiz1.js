import React, { useState, useEffect } from "react";
import questionsData from "./questions.json";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

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
  };

  return (
    <div>
      <h1>U.S. Citizenship Quiz</h1>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            {index + 1}. {question.question}
          </li>
        ))}
      </ul>
      <button onClick={generateRandomQuestions}>Generate New Questions</button>
    </div>
  );
};

export default Quiz;
