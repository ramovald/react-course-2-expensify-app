class Person {
    constructor(name = 'Anonymous', age= 'just born')  {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        //return 'Hi ' + this.name;
        return `Hi. I am ${this.name}!`;
    }
    getDescription() {
        return `Hi. I am ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    getMajor() {
        return `Hi I'm a ${this.major}`;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        return description;
    }
}

class Traveler extends Student {
    constructor(name, age, major, location='Nowhere') {
        super(name, age, major);
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.location) {
            return greeting += ` Hi I'm visiting from ${this.location}`;
        }
        return greeting;
    }
}

//const me =  new Person('ravami');
const me =  new Student('ravami');
console.log(me.getDescription());
const other = new Traveler(null, 3, 'Lawyer');
console.log(other.getDescription());
console.log(other.hasMajor());
console.log(other.getGreeting());

const traveler = new Traveler('tadi',23,'writer','Philadelphia');
console.log(traveler.getGreeting());