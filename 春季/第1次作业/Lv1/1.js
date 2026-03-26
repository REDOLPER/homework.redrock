const btn = document.querySelector('.btn');
const input = document.querySelector('.search');
const div1 = document.querySelector('.div1');
const div2 = document.querySelector('.div2');
const line = document.querySelector('.line');
const show = document.querySelector('.show');

//防抖
function debounce(fn, delay = 500) {
  let timer = null;
  // let previous = 0;

  return function() {
    // const now = Date.now();

    // if(now - previous >= delay) {
    //   if (timer) {
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       timer = null;
    //     })
    //     previous = now;
    //     return;
    //   }
    //   fn.apply(this, arguments);
    //   previous = now;
    // }
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, delay);
  }
}

// let now = 0;
// let update = false;
// let inputContent = input.value.trim();

// setInterval(() => {
//   now = Date.now();
// }, 1);

// function debounce(fn, delay = 500) {
//   let previous = Date.now();

//   return function() {
//     if (now - previous < delay) {
//       previous = now;
//       return;
//     } else {
//       setInterval(() => {}, 500);
//       fn.apply(this, arguments);
//       previous = now;
//     }
//   }
// }

// function debounce(fn, delay = 500) {
//   let previous = Date.now();

//   return function() {
//     const now = Date.now();

//     if (now - previous < delay) {
//       previous = now;
//       now = Date.now();
//       return;
//     } else {
//       fn.apply(this, arguments);
//       previous = now;
//       now = Date.now();
//     }
//   }
// }




input.addEventListener('input', debounce((event) => {
  console.log('发送搜索请求：', event.target.value);

  //改变样式
  if (event.target.value === '') {
    div1.style.height = '97px';
    line.style.visibility = 'hidden';
    // show.style.visibility = 'hidden';
    show.style.display = 'none';
    show.textContent = '';
  } else {
    div1.style.height = '137px';
    line.style.visibility = 'visible';
    // show.style.visibility = 'visible';
    show.style.display = 'flex';
    show.textContent = event.target.value;
  }
}, 500))

// btn.addEventListener('click', throttle(function() {
//   console.log(num);
//   num++;
// }))

//节流
function throttle(fn, delay = 1000) {
  let previous = 0;

  return function() {
    const now = Date.now();
    if (now - previous >= delay) {
      fn.apply(this, arguments);
      previous = now;
    }
  }
}

let num = 1;

btn.onclick = throttle(function() {
  console.log(num);
  num++;

  const content = input.value.trim();
  const url = `https://www.baidu.com/s?wd=${encodeURIComponent(content)}`;
  window.open(url, '_blank');
})

show.onclick = () => {
  const showContent = show.textContent;
  const url = `https://www.baidu.com/s?wd=${encodeURIComponent(showContent)}`;
  window.open(url, '_blank');
}

//弥补上了之前没做搜索的遗憾（嘻嘻嘻

//学长学姐，我实在想不出防抖基于时间戳该怎么写了。注释的代码都无法达到预期效果:cry:
