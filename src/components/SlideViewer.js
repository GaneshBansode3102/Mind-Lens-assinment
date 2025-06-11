import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "../components/style.css";

const SlideViewer = ({ content }) => {
  const slides = content.split("---").map((s) => s.trim());
  const [current, setCurrent] = useState(0);

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  return (
    <div className="slide-viewer">
      <div className="slide-content">
        <ReactMarkdown>{slides[current]}</ReactMarkdown>
      </div>
      <div className="slide-controls">
        <button onClick={prev} disabled={current === 0}>
          ◀ Previous
        </button>
        <span>
          Slide {current + 1} of {slides.length}
        </span>
        <button onClick={next} disabled={current === slides.length - 1}>
          Next ▶
        </button>
      </div>
    </div>
  );
};

export default SlideViewer;
