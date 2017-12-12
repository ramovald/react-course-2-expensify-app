/*const person = {
   //name: 'Andrew',
   age: 26,
   location: {
      city: 'Merida',
      temp: 28
   }
}

const {name: firstname='Anonymous', age} = person;
//const name = person.name;
//const age = person.age;

console.log(`${firstname} is ${age} old `);

const {city, temp: temperature} = person.location;
if (city && temperature) {
   console.log(`It's ${temperature} degree in ${city}`);
}*/

const myAddress = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//const myAddress = [];
const [,,state='New York'] = myAddress;

console.log(`You are in ${city} ${state}`);