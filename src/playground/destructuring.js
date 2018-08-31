const person = {
  name: 'Andrew',
  age: 26,
  location: {
    city: 'Philadelphia',
    temp: 88
  }
};

const { name: firstName = 'Anon', age } = person;

console.log(`${firstName} is ${age}`);

const {
  location: { city, temp: temperature }
} = person;

console.log(`It's ${city} in ${temperature}`);
