import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const score = location.state?.score ?? 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 text-white">
      <h1 className="text-5xl font-bold mb-6">Your Score</h1>
      <p className="text-3xl mb-8">{score} / 10</p>
      <button
        onClick={() => navigate("/quiz")}
        className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-md shadow hover:bg-gray-200 transition"
      >
        Restart Quiz
      </button>
      <button
        onClick={() => navigate("/")}
        className="mt-4 px-8 py-3 border border-white rounded-md font-semibold hover:bg-white hover:text-purple-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
}

export default Results;
