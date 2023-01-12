import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <Button
      name={option}
      key={option}
      onClick={e => onLeaveFeedback(e.target.name)}
    >
      {getCapitalize(option)}
    </Button>
  ));

function getCapitalize(text) {
  return text.charAt(0).toUpperCase().concat(text.slice(1));
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
