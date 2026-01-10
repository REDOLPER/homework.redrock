const choose = document.querySelectorAll('p');
const arr = [...choose].map(p => p.textContent);
const textarr = [...arr[0]];

const contain = document.createElement('div');
contain.style.position = 'relative';
document.body.appendChild(contain);

choose.forEach(element => element.remove());

let i = 0;

function print() {
  if (i < textarr.length) {
    const span = document.createElement('span');
    span.textContent = textarr[i];
    span.style.color = 'transparent';
    contain.appendChild(span);

    setTimeout(() => {
      span.style.color = 'black';
      i++;
      print();
    }, 100)
  }
}

print();

//?额……这样回调地狱的问题不就解决了吗？（不用异步
