import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp.js';

const obj = {
    name: 'Vic',
    getName() {
        return this.name;
    }
};
const getName = obj.getName.bind({name: 'Andy'});
console.log(getName());

const func = function() {
    console.log(this);
}
//func();







ReactDOM.render(<IndecisionApp options={[]}/>, document.getElementById('app'));