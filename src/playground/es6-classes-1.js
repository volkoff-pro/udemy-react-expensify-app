class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreating() {
    return `Hi. I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person('Sergey Volkoff', 36);

console.log(me.getGreating());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreating());
console.log(other.getDescription());
