import React from "react";
import "./Notification.css";

const Notification = ({ message }) => (
  <div className="NoFeedback__Statistics">
    <span className="NoFeedback__Msg">{message}</span>
  </div>
);

export default Notification;
