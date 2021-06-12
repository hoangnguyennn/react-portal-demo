import ReactDOM from 'react-dom';

const toastContainer = document.createElement('div');
toastContainer.id = 'myToast';
document.body.appendChild(toastContainer);

export const ToastContainer = ({ children }) => {
  return ReactDOM.createPortal(children, toastContainer);
};
