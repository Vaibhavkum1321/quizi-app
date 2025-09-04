import React from "react";

export default function Question({ data, selected, onSelect }) {
  return (
    <div className="bg-white rounded-2xl shadow-md w-full p-6 max-w-3xl animate-[fadeIn_250ms_ease]">
      <h2 className="text-xl md:text-2xl font-semibold mb-5">{data.question}</h2>
      <div className="grid gap-3">
        {data.options.map((opt, i) => {
          const active = selected === opt;
          return (
            <button
              key={i}
              onClick={() => onSelect(opt)}
              className={`text-left px-4 py-3 rounded-xl border transition
                focus:outline-none focus:ring-2 focus:ring-offset-2
                ${active ? "bg-blue-600 text-white border-blue-600" : "bg-gray-50 hover:bg-gray-100 border-gray-200"}`}
              aria-pressed={active}
            >
              {opt}
            </button>
          );
        })}
      </div>
      <style>{`@keyframes fadeIn { from {opacity: 0; transform: translateY(6px)} to {opacity: 1; transform: translateY(0)} }`}</style>
    </div>
  );
}
