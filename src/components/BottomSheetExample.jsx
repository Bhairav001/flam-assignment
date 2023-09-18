// BottomSheetExample.js
import React, { useState } from 'react';
import { BottomSheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';
import './Bottom.css';
import ToggleButton from './ToggleButton';
import Bottom from './Bottom';

const BottomSheetExample = () => {
  const [sheetPosition, setSheetPosition] = useState(0); // 0: closed, 1: half-open, 2: fully open
  const [isParagraphVisible, setIsParagraphVisible] = useState(false);

  const snapPoints = [50, '50%', '90%'];

  const handleSnap = (pointIndex) => {
    setSheetPosition(pointIndex);
  };

  const handleDrag = (percentage) => {
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

  const handleButtonClick = () => {
    setIsParagraphVisible(!isParagraphVisible);
  };

  return (
    <BottomSheet
      snapPoints={snapPoints}
      initialSnap={0}
      header={<div className="header">Header</div>}
      onDismiss={() => setSheetPosition(0)}
      onSnap={handleSnap}
      onDrag={handleDrag}
    >
      {(snap) => (
        <div className="content" {...snap}>
          <div className={`content-container position-${sheetPosition}`}>
            <ToggleButton onClick={handleButtonClick} />
            {isParagraphVisible && <Bottom isVisible={isParagraphVisible} />}
            <h1>this  is paragraph</h1>
          </div>
        </div>
      )}
    </BottomSheet>
  );
};

export default BottomSheetExample;
