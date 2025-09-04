import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const startQuiz = (level) => {
    navigate("/quiz", { state: { difficulty: level } });
  };

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-xl w-full text-center animate-fadeIn">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Quiz App</h1>
      <p className="text-gray-600 mb-6">Choose difficulty and start your quiz!</p>

      <div className="space-y-4">
        <button
          onClick={() => startQuiz("easy")}
          className="w-full py-3 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition transform hover:scale-105"
        >
          Easy
        </button>
        <button
          onClick={() => startQuiz("medium")}
          className="w-full py-3 rounded-xl bg-yellow-500 text-white font-semibold hover:bg-yellow-600 transition transform hover:scale-105"
        >
          Medium
        </button>
        <button
          onClick={() => startQuiz("hard")}
          className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition transform hover:scale-105"
        >
          Hard
        </button>
      </div>
    </div>
  );
}
