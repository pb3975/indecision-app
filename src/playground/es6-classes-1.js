
class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name} !`;
  }
  getDescription() {
   return `${this.name} is ${this.age} years old`;
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
      description += ` Their Major is ${this.major}`;
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
    return !!this.homeLocation;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasHomeLocation()) {
      description += ` and his location is ${this.homeLocation}`;
    }
    return description;
  }
}



const me = new Traveler('William', 26, 'Cincinnati');

console.log(me.getDescription());

const other = new Traveler();
console.log(other.getDescription());