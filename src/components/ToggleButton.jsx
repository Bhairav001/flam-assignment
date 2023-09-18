import React, { useState } from 'react';

function ToggleButton({ onClick }) {
  return (
    <button onClick={onClick} className="toggle-button">
      Toggle Paragraph
    </button>
  );
}

export default ToggleButton;
