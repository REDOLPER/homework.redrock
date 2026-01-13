const person = {
  name: 'Madeline',
  age: 18,  //我不知道哇，反正成年了
  address: {
    country: 'Canada',
    area: 'Celeste'
  },
  title: ['badeline', {love: 'Theo'}]  //好吧love是我编的
}

const {name} = person;
const {age: year} = person;
const {address: {country}} = person;
const {address: {area: mountain}} = person;
const {title: [title1]} = person;
const {title: [, {love: title2}]} = person;

console.log(name);  //已弃用？
console.log(year); 
console.log(country); 
console.log(mountain); 
console.log(title1); 
console.log(title2); 
