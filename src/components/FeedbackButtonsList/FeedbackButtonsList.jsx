import { FeedbackButton } from 'components/FeedbackButton/FeedbackButton';
import { ButtonList } from './FeedbackButtonsList.styled';

export const FeedbackButtonsList = () => {
  return (
    <ButtonList>
      <FeedbackButton text="Good" />
      <FeedbackButton text="Neutral" />
      <FeedbackButton text="Bad" />
    </ButtonList>
  );
};
