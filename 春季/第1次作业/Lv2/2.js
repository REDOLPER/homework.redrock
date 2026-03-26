const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100; 

// function compose(fn1) {
//   return function(fn2) {
//     return function(fn3) {
//       return function(initial) {
//         const fnArr = [fn1, fn2, fn3];
//         return fnArr.reduce((res, current) => current(res), initial);
//       }
//     }
//   }
// }

function compose(...fnArr) {
  return function(initial) {
    return fnArr.reduceRight((res, current) => current(res), initial);
  }
}

const ans = compose(add10, mul10, add100)(10);
console.log(ans);
