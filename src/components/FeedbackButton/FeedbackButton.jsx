import { Button } from './FeedbackButton.styled';

const FeedbackButton = ({ text, addFeedback }) => {
  return (
    <Button name={text.toLowerCase()} onClick={e => addFeedback(e.target.name)}>
      {text}
    </Button>
  );
};

export default FeedbackButton;
