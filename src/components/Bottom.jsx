import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

const Bottom = () => {
  const [sheetPosition, setSheetPosition] = useState(0); // 0: closed, 1: half-open, 2: fully open

  const snapPoints = [50, '50%', '90%'];
  const handleSnap = (pointIndex) => {
    setSheetPosition(pointIndex);
  };

  const handleDrag = (percentage) => {
    // Update the position based on drag percentage
    const currentPosition = sheetPosition === 0 ? 0 : sheetPosition === 1 ? 0.5 : 1;
    const newPosition = currentPosition + percentage / 100;

    if (newPosition <= 0) {
      setSheetPosition(0);
    } else if (newPosition <= 0.5) {
      setSheetPosition(1);
    } else {
      setSheetPosition(2);
    }
  };

  const handleOpenClick = () => {
    setSheetPosition(2);
  };

  const handleCloseClick = () => {
    setSheetPosition(0);
  };

  return (
    <BottomSheet
      snapPoints={snapPoints}
      initialSnap={0}
      header={<div className="header">Header</div>}
      onDismiss={() => setSheetPosition(0)} // Reset position when dismissed
      onSnap={handleSnap}
      onDrag={handleDrag}
    >
      {(snap) => (
        <div className="content" {...snap}>
          <div className={`content-container position-${sheetPosition}`}>
            <div className="closed-content">
              <p>Handle or indicator here</p>
            </div>
            <div className="half-open-content">
              <p>Revealed content here</p>
            </div>
            <div className="fully-open-content">
              <p>Full content here</p>
            </div>
          </div>
        </div>
      )}
    </BottomSheet>
  );
};

export default Bottom;
