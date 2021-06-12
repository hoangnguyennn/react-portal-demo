import ReactDOM from 'react-dom';

const queue = [];

const random = () => Math.round(Math.random() * 10000000);

export const toast = (text) => {
  console.log('show');
  queue.push({ text, id: random() });
  render(queue);

  setTimeout(() => {
    console.log('hide');
    queue.shift();
    render(queue);
  }, 5000);
};

const Item = ({ text }) => <div>{text}</div>;

const render = (queue, isShow = true) => {
  const content = (
    <>
      {isShow
        ? queue.map(({ text, id }) => <Item text={text} key={id} />)
        : null}
    </>
  );

  return ReactDOM.render(content, document.getElementById('myToast'));
};
