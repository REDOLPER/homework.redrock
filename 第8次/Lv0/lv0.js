fetch('https://api.github.com/users/REDOLPER')
  .then(response => response.json())
  .then(data => console.log(data));
//？是这样的吗？这个作业是就这三行嘛？
