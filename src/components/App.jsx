import React, { Component } from 'react';
import { Container } from './App.styled';
import FeedbackButtonsList from './FeedbackButtonsList';
import FeedbackButton from './FeedbackButton';
import StatisticsBox from './StatisticsBox/StatisticsBox';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedback = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  render() {
    return (
      <Container>
        <h1>Please leave feedback</h1>
        <FeedbackButtonsList>
          <FeedbackButton text="Good" addFeedback={this.updateFeedback} />
          <FeedbackButton text="Neutral" addFeedback={this.updateFeedback} />
          <FeedbackButton text="Bad" addFeedback={this.updateFeedback} />
        </FeedbackButtonsList>
        <h2>Statistics</h2>
        <StatisticsBox />
      </Container>
    );
  }
}

export default App;
