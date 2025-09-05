import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-6 space-y-8">
      <h1 className="text-5xl font-bold">Welcome to the Quiz!</h1>
      <Link
        to="/quiz"
        className="px-8 py-3 bg-white text-purple-700 font-semibold rounded-md shadow hover:bg-gray-200 transition"
      >
        Start Quiz
      </Link>

      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <section className="bg-white bg-opacity-20 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Challenge Yourself</h2>
          <p>Test your knowledge and improve your skills.</p>
        </section>
        <section className="bg-white bg-opacity-20 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Learn and Grow</h2>
          <p>Gain new insights with every question you answer.</p>
        </section>
        <section className="bg-white bg-opacity-20 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Compete and Share</h2>
          <p>Compare your scores with friends and challenge them.</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
