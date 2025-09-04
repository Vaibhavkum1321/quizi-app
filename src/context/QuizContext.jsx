import React, { createContext, useContext, useMemo, useState } from "react";

const QuizContext = createContext(null);
export const useQuiz = () => useContext(QuizContext);

const decode = (str) => {
  const el = document.createElement("textarea");
  el.innerHTML = str;
  return el.value;
};

export default function QuizProvider({ children }) {
  const [difficulty, setDifficulty] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");;

  const amount = 10;

  const fetchQuestions = async (diff = "easy") => {
    try {
      setError(""); setLoading(true); setDifficulty(diff); setAnswers([]); setCurrent(0);

      const res = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${diff}&type=multiple`);
      const data = await res.json();
      if (!data.results || data.results.length === 0) throw new Error("No questions returned. Try another difficulty.");

      const normalized = data.results.map((q) => {
        const pool = [...q.incorrect_answers, q.correct_answer].map(decode);
        for (let i = pool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [pool[i], pool[j]] = [pool[j], pool[i]];
        }
        return { question: decode(q.question), options: pool, correct: decode(q.correct_answer) };
      });

      setQuestions(normalized);
    } catch (e) {
      setError(e.message || "Failed to fetch questions.");
    } finally {
      setLoading(false);
    }
  };

  const value = useMemo(() => ({
    difficulty, setDifficulty, questions, setQuestions,
    answers, setAnswers, current, setCurrent,
    loading, error, amount, fetchQuestions,
  }), [difficulty, questions, answers, current, loading, error]);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}
