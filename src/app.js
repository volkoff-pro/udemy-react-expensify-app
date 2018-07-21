function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};

const user = {};

let count = 0;

// eslint-disable-next-line
console.log('App.js is running');

const addOne = () => {
  count += 1;
  renderApp();
};

const minusOne = () => {
  count -= 1;
  renderApp();
};

const reset = () => {
  count = 0;
  renderApp();
};

const onFormSubmit = event => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    app.options.push(option);
    event.target.elements.option.value = '';
    renderApp();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const appRoot = document.getElementById('app');

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do
      </button>
      <button onClick={onRemoveAll}>Remove All</button>
      <ol>
        {app.options.map(option => <li key={option}>Option {option}</li>)}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderApp();
