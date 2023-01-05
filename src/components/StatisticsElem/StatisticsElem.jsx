import { StatInfo } from './StatisticsElem.styled';
const StatisticsElem = ({ text, value }) => (
  <StatInfo>
    {text}: {value}
  </StatInfo>
);
export default StatisticsElem;
