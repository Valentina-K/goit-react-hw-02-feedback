import { Button } from './FeedbackOptions.styled';
const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => (
    <Button
      name={option.toLowerCase()}
      onClick={e => onLeaveFeedback(e.target.name)}
    >
      {option}
    </Button>
  ));

export default FeedbackOptions;
