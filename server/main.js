import {Players} from '../imports/api/players';
import {Meteor} from 'meteor/meteor';

Meteor.startup(()=>{

});

let user = {
  name: 'Andrew',
  location: 'Philadelhia'
};

let person = {
  ...user,
  age: 25
};

console.log(person);
