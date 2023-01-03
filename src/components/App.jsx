import React, { Component } from 'react';

import { FeedbackButtonsList } from './FeedbackButtonsList/FeedbackButtonsList';
import StatisticsBox from './StatisticsBox/StatisticsBox';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackButtonsList />
        <h2>Statistics</h2>
        <StatisticsBox />
      </>
    );
  }
}

export default App;
