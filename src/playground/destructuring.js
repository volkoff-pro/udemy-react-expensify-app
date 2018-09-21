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

const address = [
  '1299 S Juniper Street',
  'Philadelphia',
  'Pennsilvania',
  '19147'
];

const [, town, state] = address;

console.log(`You are in ${town} ${state}`);
