import React, { Component } from 'react';
import { Container } from './App.styled';
import Section from './Section';
import Notification from './Notification';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  total = 0;
  positive = 0;
  options = ['Good', 'Neutral', 'Bad'];

  updateFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
    this.total += 1;
    this.positive =
      name === 'good' || name === 'neutral' ? this.positive + 1 : this.positive;
  };

  countTotalFeedback = () => this.total;

  countPositiveFeedbackPercentage = () =>
    `${Math.round((this.positive / this.total) * 100)}%`;

  render() {
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.updateFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Container>
    );
  }
}

export default App;
