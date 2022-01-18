import "./index.css";
import React from "react";
import Section from "./components/Section/Section";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";

class App extends React.Component {
  static defaultProps = {
    goodValue: 0,
    neutralValue: 0,
    badValue: 0,
    totalDef: 0,
    positivePercantageDef: 0,
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

    // this.setState({ good: 0 });
  };
  neutralIncrement = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  badIncrement = () => {
    this.setState((prevState) => ({
      bad: prevState.bad + 1,
    }));

    // this.setState({ bad: 100 });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    let positivePercantage = Math.round(
      good > 0 ? (good / this.countTotalFeedback()) * 100 : 0
    );

    return positivePercantage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    let total = good + neutral + bad;

    console.log(this.countTotalFeedback());
    console.log(this.countPositiveFeedbackPercentage());

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={"text"}
            gIncr={this.goodIncrement}
            nIncr={this.neutralIncrement}
            bIncr={this.badIncrement}
            onLeaveFeedback={this.props.totalDef}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </>
    );
  }
}

export default App;
