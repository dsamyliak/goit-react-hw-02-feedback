import React from "react";
import "./FeedbackOptions.css";

// const FeedbackOptions = ({ gIncr, nIncr, bIncr }) => (
//   <div className="Feedback__Controls">
//     <button type="button" className="Good Btn" onClick={gIncr}>
//       Good
//     </button>
//     <button type="button" className="Neutral Btn" onClick={nIncr}>
//       Neutral
//     </button>
//     <button type="button" className="Bad Btn" onClick={bIncr}>
//       Bad
//     </button>
//   </div>
// );

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Feedback__Controls">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className="Btn"
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
