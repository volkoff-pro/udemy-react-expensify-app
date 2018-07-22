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

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return this.homeLocation;
  }

  getGreating() {
    let greating = super.getGreating();

    if (this.hasHomeLocation()) {
      greating += ` I'm visiting from ${this.homeLocation}`;
    }

    return greating;
  }
}

const me = new Student('Sergey Volkoff', 36, 'Computer Science');

console.log(me);
console.log(me.getDescription());
console.log(me.hasMajor());

const traveler = new Traveler('Shutov', 35, 'Engels');
console.log(traveler);
console.log(traveler.getGreating());

const other = new Student();
console.log(other);
console.log(other.getDescription());
console.log(other.hasMajor());
