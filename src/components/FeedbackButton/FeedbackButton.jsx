import { Button } from './FeedbackButton.styled';

export const FeedbackButton = ({ text }) => {
  return <Button name={text.toLowerCase()}>{text}</Button>;
};
