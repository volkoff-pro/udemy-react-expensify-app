const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
    <h4>{user.name ? user.name : 'Anonymous'}</h4>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    <p>{getLocation(user.location)}</p>
    <br />
    <hr />
    <br />
    <div>
      <h3>Count: {count}</h3>
      <button type="button" onClick={addOne}>
        +1
      </button>
      <button type="button" onClick={minusOne}>
        -1
      </button>
      <button type="button" onClick={reset}>
        reset
      </button>
    </div>
  </div>
);
