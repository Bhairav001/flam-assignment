// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const handleButtonClick = () => {
    setShowParagraph(!showParagraph);
  };

  return (
    <div className="container">
      <h1>Bottom Sheet Animation</h1>
      <div className="button-container">
        <button className="button" onClick={handleButtonClick}>
          {showParagraph ? 'Hide Paragraph' : 'Show Paragraph'}
        </button>
      </div>
      <p className={`animated-paragraph ${showParagraph ? 'show-paragraph' : ''}`}>
        Industry Ready In Just
        25 - 35 Weeks
        Curriculum At Masai Is Designed To Be Intensive & Extensive. With Our Unique Pedagogy Learn Right In Less Time. All We Ask Is Your Dedication!
        Elevate yellow-vectorYour Career Possibilities
        It doesn’t matter where you come from, we know how to get you to your dream career.

        Our graduates consistently outperform students from top Indian engineering colleges & universities. 70% of companies who have hired 1 Masai graduate come back to us with their hiring mandates.
        NSDC Certification is a prestigious recognition for students who have completed accredited skill-based training programs. It validates their expertise, demonstrating their dedication to practical skills. This certification provides a competitive edge in the job market, showcasing proficiency and adherence to industry standards. NSDC certifications are widely accepted, unlocking rewarding career opportunities and personal growth.
        NSDC Certification is a prestigious recognition for students who have completed accredited skill-based training programs. It validates their expertise, demonstrating their dedication to practical skills. This certification provides a competitive edge in the job market, showcasing proficiency and adherence to industry standards. NSDC certifications are widely accepted, unlocking rewarding career opportunities and personal growth.
        NSDC Certification is a prestigious recognition for students who have completed accredited skill-based training programs. It validates their expertise, demonstrating their dedication to practical skills. This certification provides a competitive edge in the job market, showcasing proficiency and adherence to industry standards. NSDC certifications are widely accepted, unlocking rewarding career opportunities and personal growth.
        NSDC Certification is a prestigious recognition for students who have completed accredited skill-based training programs. It validates their expertise, demonstrating their dedication to practical skills. This certification provides a competitive edge in the job market, showcasing proficiency and adherence to industry standards. NSDC certifications are widely accepted, unlocking rewarding career opportunities and personal growth.
        NSDC Certification is a prestigious recognition for students who have completed accredited skill-based training programs. It validates their expertise, demonstrating their dedication to practical skills. This certification provides a competitive edge in the job market, showcasing proficiency and adherence to industry standards. NSDC certifications are widely accepted, unlocking rewarding career opportunities and personal growth.
      </p>
    </div>
  );
}

export default App;
