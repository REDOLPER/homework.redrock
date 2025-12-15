const factorial1 = n => {
  let res = 1n;
  for(let a = 1n; a <= n; a++) {
    res *= a;
  }
  return res;
}

const factorial2 = n => {
  const N = BigInt(n);
  if(N == 0n) return 1n;
  if(N == 1n) {
    return 1n;
  }else {
    return N * factorial2(N - 1n);
  }
}

//console.log(factorial1(6));
//console.log(factorial2(6));
