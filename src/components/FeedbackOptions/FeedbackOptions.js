import React from "react";
import "./FeedbackOptions.css";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className="Feedback__Controls">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={option.charAt(0).toUpperCase() + option.slice(1) + ` Btn`}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
