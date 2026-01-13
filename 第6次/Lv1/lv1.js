const allButton = document.querySelector('input[value = "全选"]');
const noneButton = document.querySelector('input[value = "全不选"]');
const invButton = document.querySelector('input[value = "反选"]');

const all = document.querySelectorAll("input[type = 'checkbox']");

function sa(e1) {
  const ev1 = e1.target;
  if (ev1 === allButton) {
    for (let i = 0; i < 4; i++) {
      all[i].checked = true;
    }
  } else if (ev1 === noneButton) {
    for (let i = 0; i < 4; i++) {
      all[i].checked = false;
    }
  } else if (ev1 === invButton) {
    for (let i = 0; i < 4; i++) {
      all[i].checked = !all[i].checked;
    }
  }
}

document.addEventListener('click', sa);
