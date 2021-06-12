import { toast, ToastContainer } from './Toast';

const random = () => Math.round(Math.random() * 100);

const App = () => {
  return (
    <>
      <button
        onClick={() => {
          const key = random();
          toast(`toast content ${key}`, key);
        }}
      >
        show toast
      </button>
      <ToastContainer />
    </>
  );
};

export default App;
