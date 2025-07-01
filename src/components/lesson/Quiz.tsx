'use client';

import { useState } from 'react';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number) => void;
}

export const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  
  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };
  
  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const score = calculateScore();
      setShowResults(true);
      onComplete(score);
    }
  };
  
  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };
  
  if (showResults) {
    const score = calculateScore();
    return (
      <div className="quiz-results">
        <h3>Quiz Complete!</h3>
        <p>Your Score: {score}/{questions.length}</p>
        <div className="results-breakdown">
          {questions.map((q, index) => (
            <div key={q.id} className="question-result">
              <p><strong>Q{index + 1}:</strong> {q.question}</p>
              <p className={selectedAnswers[index] === q.correctAnswer ? 'correct' : 'incorrect'}>
                Your answer: {q.options[selectedAnswers[index]]}
              </p>
              {selectedAnswers[index] !== q.correctAnswer && (
                <p className="correct-answer">
                  Correct answer: {q.options[q.correctAnswer]}
                </p>
              )}
              {q.explanation && <p className="explanation">{q.explanation}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  const question = questions[currentQuestion];
  
  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      
      <div className="question-section">
        <h3>{question.question}</h3>
        <div className="options">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`option ${selectedAnswers[currentQuestion] === index ? 'selected' : ''}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      <button 
        onClick={nextQuestion}
        disabled={selectedAnswers[currentQuestion] === undefined}
        className="next-button"
      >
        {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
      </button>
    </div>
  );
};
