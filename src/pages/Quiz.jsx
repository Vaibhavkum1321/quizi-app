import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Quiz() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const res = await fetch(
          `https://opentdb.com/api.php?amount=5&difficulty=${state?.difficulty}&type=multiple`
        );
        const data = await res.json();
        const formatted = data.results.map((q) => ({
          question: q.question,
          options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
          correct: q.correct_answer,
        }));
        setQuestions(formatted);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    }
    fetchQuestions();
  }, [state]);

  useEffect(() => {
    if (timer === 0) handleNext();
    const countdown = setTimeout(() => setTimer((t) => t - 1), 1000);
    return () => clearTimeout(countdown);
  }, [timer]);

  const handleNext = () => {
    if (selected === questions[current]?.correct) {
      setScore((s) => s + 1);
    }
    if (current + 1 < questions.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setTimer(30);
    } else {
      navigate("/results", { state: { score, total: questions.length, questions } });
    }
  };

  if (!questions.length) return <p className="text-white text-xl">Loading questions...</p>;

  return (
    <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-2xl w-full animate-fadeIn">
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-700 font-semibold">
          Question {current + 1} / {questions.length}
        </p>
        <p className="font-bold text-red-500">{timer}s</p>
      </div>

      <h2
        className="text-xl font-bold text-gray-800 mb-6"
        dangerouslySetInnerHTML={{ __html: questions[current].question }}
      />

      <div className="space-y-3">
        {questions[current].options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(option)}
            className={`w-full py-3 rounded-xl border text-gray-700 font-medium transition transform hover:scale-105
              ${selected === option ? "bg-indigo-500 text-white" : "bg-gray-100 hover:bg-gray-200"}
            `}
            dangerouslySetInnerHTML={{ __html: option }}
          />
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={!selected}
        className="mt-6 w-full py-3 rounded-xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 disabled:bg-gray-400 transition transform hover:scale-105"
      >
        {current + 1 === questions.length ? "Finish Quiz" : "Next"}
      </button>
    </div>
  );
}
