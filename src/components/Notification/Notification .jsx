import PropTypes from 'prop-types';
import { Info } from './Notification.styled';
const Notification = ({ message }) => <Info>{message}</Info>;

export default Notification;

Info.propTypes = {
  message: PropTypes.string,
};
