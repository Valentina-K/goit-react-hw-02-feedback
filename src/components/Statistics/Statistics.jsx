import PropTypes from 'prop-types';
import StatisticsElem from 'components/StatisticsElem';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <StatisticsElem text="Good" value={good} />
    <StatisticsElem text="Neutral" value={neutral} />
    <StatisticsElem text="Bad" value={bad} />
    <StatisticsElem text="Total" value={total} />
    <StatisticsElem text="Positive feedback" value={positivePercentage} />
  </div>
);
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
