const choose = document.querySelectorAll('p');
const arr = [...choose].map(p => p.textContent);
const textarr = [...arr[0]];

choose.forEach(element => element.remove());

let i = 0;

function print() {
  if (i < textarr.length) {
    new Promise((resolve) => {
      const span = document.createElement('span');
      span.textContent = textarr[i];
      span.style.color = 'black';
      document.body.appendChild(span);
      resolve(++i);
    }).then(() => {
      setTimeout(() => print(), 100);
    })
  }
}

print();
