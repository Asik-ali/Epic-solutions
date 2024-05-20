import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement('script');
    script.src = '//pagead2.googlesyndication.com/pagead/show_ads.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

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
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSkip = () => {
    setCurrentQuestion(currentQuestion + 1);
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
                  className={`block w-full ${
                    answerStatus === 'correct' && option === questions[currentQuestion].answer
                      ? 'bg-green-500 hover:bg-green-700'
                      : answerStatus === 'wrong'
                      ? option === questions[currentQuestion].answer
                        ? 'bg-green-500 hover:bg-green-700'
                        : 'bg-red-500 hover:bg-red-700'
                      : 'bg-gray-200 hover:bg-gray-300'
                  } text-white font-semibold py-2 px-4 rounded-lg transition duration-200`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex justify-between">
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              Previous
            </button>
            <button
              className="bg-gray-500 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
              onClick={handleSkip}
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
