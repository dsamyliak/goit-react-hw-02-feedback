import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  static defaultProps = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    total: 0,
    positivePercantage: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.goodValue,
    neutral: this.props.neutralValue,
    bad: this.props.badValue,
  };

  // state = {
  //     good: 0,
  //     neutral: 0,
  //     bad: 0
  // };

  goodIncrement = () => {
    this.setState((prevState) => ({
      good: prevState.good + 1,
    }));
  };
  neutralIncrement = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badIncrement = () => {
    // this.setState({ bad: 100 });

    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () =>
    // this.setState({ total: 0 });
    this.setState();

  countPositiveFeedbackPercentage = () => {};

  render() {
    return (
      <div className="Feedback__Counter">
        <h2 className="Feedback__Title">Please leave feedback</h2>

        <div className="Feedback__Controls">
          <button
            type="button"
            className="Good Btn"
            onClick={this.goodIncrement}
          >
            Good
          </button>
          <button
            type="button"
            className="Neutral Btn"
            onClick={this.neutralIncrement}
          >
            Neutral
          </button>
          <button type="button" className="Bad Btn" onClick={this.badIncrement}>
            Bad
          </button>
        </div>

        <h2 className="Statistics__Title">Statistics</h2>

        <div className="Feedback__Statistics">
          <span className="Good Result">
            Good: <span className="Good Value">{this.state.good}</span>
          </span>
          <span className="Neutral Result">
            Neutral: <span className="Neutral Value">{this.state.neutral}</span>
          </span>
          <span className="Bad Result">
            Bad: <span className="Bad Value">{this.state.bad}</span>
          </span>
        </div>
        <div className="Additional__Statistics">
          <span className="Total Result">
            Total:{" "}
            <span className="Total Value">
              {this.state.good + this.state.neutral + this.state.bad}
            </span>
          </span>
        </div>
      </div>
    );
  }
}

export default Counter;
