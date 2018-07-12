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

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <h4>{user.name ? user.name : 'Anonymous'}</h4>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    <p>{getLocation(user.location)}</p>
  </div>
);

// eslint-disable-next-line
console.log('App.js is running');

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
