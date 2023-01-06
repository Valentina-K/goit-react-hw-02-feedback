import PropTypes from 'prop-types';
import { StatInfo } from './StatisticsElem.styled';
const StatisticsElem = ({ text, value }) => (
  <StatInfo>
    {text}: {value}
  </StatInfo>
);
export default StatisticsElem;
StatInfo.propTypes = {
  text: PropTypes.string,
  value: PropTypes.number,
};
