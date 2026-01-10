const choose = document.querySelectorAll('p');
const arr = [...choose].map(p => p.textContent);
const textarr = [...arr[0]];

choose.forEach(element => element.remove());

let i = 0;

const next = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(i++);
    }, 100);
  })
}

//神秘报错

// const print4 = async () => {
//   const span = document.createElement('span');
//   span.textContent = textarr[i];
//   span.style.color = 'black';
//   document.body.appendChild(span);
// }

const print4 = async () => {
  for (let m = 0; m < textarr.length; m++) {
  await next();
  const span = document.createElement('span');
  span.textContent = textarr[i - 1];
  span.style.color = 'black';
  document.body.appendChild(span);
  }
}

print4();
