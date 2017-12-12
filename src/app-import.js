//import './utils.js';
import any, { square, add } from './utils.js';
import senior, {isAdult, canDrink} from './person.js';
import validator from 'validator';

console.log('app.js is running!');
console.log(square(4));
console.log(isAdult(18));
console.log(canDrink(18));
console.log(any(100,181));
console.log(senior(181));
//console.log(add(1,2));


console.log('Is mail: ', validator.isEmail('test@gmail.com'));