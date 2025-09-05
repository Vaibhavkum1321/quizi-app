import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const questions = [
  { question: "What is 2 + 2?", options: ["1", "2", "3", "4"], answer: "4" },
  { question: "Capital of France?", options: ["Paris", "Berlin", "Rome", "Madrid"], answer: "Paris" },
  { question: "React is a ___ library?", options: ["Database", "UI", "Backend", "Testing"], answer: "UI" },
  { question: "What does CSS stand for?", options: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "JavaScript is ___ typed?", options: ["Strongly", "Loosely", "Not", "Statically"], answer: "Loosely" },
  { question: "Which tool is used to version control?", options: ["Docker", "Git", "Jenkins", "Node"], answer: "Git" },
  { question: "HTML stands for?", options: ["HyperText Markup Language", "Hyper Tool Markup Language", "Hyperlinks Text Mark Language", "Hyperlinking Text Marking Language"], answer: "HyperText Markup Language" },
  { question: "Which is a JavaScript framework?", options: ["React", "Laravel", "Django", "Flask"], answer: "React" },
  { question: "CSS stands for?", options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which keyword declares a variable in JS?", options: ["var", "let", "const", "All of the above"], answer: "All of the above" },
];

function Quiz() {
  const [currentQ, setCurrentQ] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (selected) => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }
    const next = currentQ + 1;
    if (next < questions.length) {
      setCurrentQ(next);
    } else {
      navigate("/results", { state: { score } });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white max-w-2xl mx-auto rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-6">
        Question {currentQ + 1} / {questions.length}
      </h2>
      <p className="text-xl mb-8">{questions[currentQ].question}</p>
      <div className="grid gap-4 w-full">
        {questions[currentQ].options.map((opt, idx) => (
          <button
            key={idx}
            className="bg-white text-purple-700 rounded py-3 font-semibold hover:bg-gray-200 transition"
            onClick={() => handleAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Quiz;
