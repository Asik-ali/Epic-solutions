import React, { useState } from 'react';

const QuizApp = () => {
  const questions = [
    {
      question: 'What is the capital of France?',
      options: ['London', 'Paris', 'Berlin', 'Rome'],
      answer: 'Paris',
    },
    {
      question: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: '4',
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
      setAnswerStatus('correct');
    } else {
      setAnswerStatus('wrong');
    }

    setTimeout(() => {
      setAnswerStatus(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setQuizCompleted(true);
      }
    }, 1000);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswerStatus(null);
    }
  };

  const handleSkip = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswerStatus(null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <div className="max-w-lg mx-auto mt-8 mb-5 p-6 bg-white shadow-md rounded-lg">
      {quizCompleted ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
          <p className="text-gray-700">Your final score is: {score}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg mt-4"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold mb-6">Question {currentQuestion + 1}</h2>
          <p className="text-gray-700 mt-4">Score: {score}</p>
          <p className="text-lg mb-4">{questions[currentQuestion].question}</p>
          <ul className="space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button
                  className={`block w-full text-center ${
                    answerStatus === 'correct' && option === questions[currentQuestion].answer
                      ? 'bg-green-500 hover:bg-green-700'
                      : answerStatus === 'wrong' && option === questions[currentQuestion].answer
                      ? 'bg-red-500 hover:bg-red-700'
                      : 'bg-gray-200 hover:bg-gray-300'
                  } text-white font-semibold py-2 px-4 rounded-lg transition duration-200`}
                  onClick={() => handleAnswer(option)}
                  disabled={answerStatus !== null}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <button
              className={`bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ${
                currentQuestion === 0 ? 'cursor-not-allowed opacity-50' : ''
              }`}
              onClick={handlePrevious}
              disabled={currentQuestion === 0 || answerStatus !== null}
            >
              Previous
            </button>
            <button
              className={`bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 ${
                currentQuestion === questions.length - 1 ? 'cursor-not-allowed opacity-50' : ''
              }`}
              onClick={handleSkip}
              disabled={currentQuestion === questions.length - 1 || answerStatus !== null}
            >
              Skip
            </button>
          </div>
          {answerStatus === 'correct' && <p className="text-green-600 mt-4">Correct!</p>}
          {answerStatus === 'wrong' && <p className="text-red-600 mt-4">Wrong!</p>}
        </div>
      )}
    </div>
  );
};

export default QuizApp;
