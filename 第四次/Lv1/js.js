let obj = {name : "Madeline", age : "?", gender : "female"};

function copy(insertObj){
  let newObj = {};
  for(let i in insertObj){
    newObj[i] = insertObj[i];
  }
  return newObj;
}

let obj1 = copy(obj);
let obj2 = copy(obj);
let obj3 = copy(obj);

let arr = [];

arr.push(obj1, obj2, obj3);

console.table(arr);
