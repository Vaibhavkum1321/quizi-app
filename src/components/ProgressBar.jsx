import React from "react";

export default function ProgressBar({ current, total }) {
  const pct = total ? Math.round(((current + 1) / total) * 100) : 0;
  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-sm">
        <span className="font-medium">Progress</span>
        <span>{current + 1} / {total}</span>
      </div>
      <div className="w-full h-3 bg-gray-200 rounded-full">
        <div
          className="h-3 rounded-full transition-all"                  style={{ width: `${pct}%`, backgroundColor: "rgb(59 130 246)" }}
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          role="progressbar"
        />
      </div>
    </div>
  );
}
