import { Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

const toast = (message, type, title) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "bottom-center",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2500,
      onScreen: true
    }
  });
};

export default toast;
