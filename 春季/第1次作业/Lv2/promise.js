// const add10 = (x) => x + 10;
// const mul10 = (x) => x * 10;
// const add100 = (x) => x + 100; 

async function add10(x) {
  return x + 10;
}

async function mul10(x) {
  return x * 10;
}

async function add100(x) {
  return x + 100;
}

function compose(...fnArr) {
  return function(initial) {
    return fnArr.reduceRight((res, current) => res.then(current), Promise.resolve(initial));
  }
}

const temp = compose(add10, mul10, add100);

const result = await temp(10);

console.log(result);

//这样对嘛？:heart:
