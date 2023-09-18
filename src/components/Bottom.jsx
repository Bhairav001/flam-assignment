// src/App.js
import React, { useState } from 'react';
import './Bottom.css';

function Bottom() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleButtonClick = () => {
    setShowParagraph(true);
  };

  return (
    <div className="container">
      <h1>Animated Paragraph</h1>
      <div className="button-container">
        <button className="button" onClick={handleButtonClick}>
          Show Paragraph
        </button>
      </div>
      {showParagraph && (
        <p className="animated-paragraph">
          This is a paragraph that animates from the bottom to the top direction.
        </p>
      )}
    </div>
  );
}

export default Bottom;
