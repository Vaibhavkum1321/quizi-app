import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Results() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const prev = localStorage.getItem("highScore") || 0;
    if (state?.score > prev) {
      localStorage.setItem("highScore", state.score);
      setHighScore(state.score);
    } else {
      setHighScore(prev);
    }
  }, [state]);

  if (!state) return <p className="text-white">No results to show.</p>;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full animate-fadeIn text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Results</h1>
      <p className="text-xl font-semibold text-indigo-600 mb-2">
        You scored {state.score} / {state.total}
      </p>
      <p className="text-gray-600 mb-6">🏆 High Score: {highScore}</p>

      <div className="space-y-3 mb-6 text-left">
        {state.questions.map((q, idx) => (
          <div
            key={idx}
            className="p-4 border rounded-xl bg-gray-50 shadow-sm"
          >
            <p className="font-medium" dangerouslySetInnerHTML={{ __html: q.question }} />
            <p className="text-sm text-gray-700">
              ✅ Correct: <span dangerouslySetInnerHTML={{ __html: q.correct }} />
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => navigate("/")}
        className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition transform hover:scale-105"
      >
        Restart Quiz
      </button>
    </div>
  );
}
