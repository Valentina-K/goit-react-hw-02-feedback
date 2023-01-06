import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <Button
      name={option.toLowerCase()}
      key={option}
      onClick={e => onLeaveFeedback(e.target.name)}
    >
      {option}
    </Button>
  ));

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
