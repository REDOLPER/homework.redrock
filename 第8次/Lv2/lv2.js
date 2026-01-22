const config = {
  method: "post",
  headers: {
    'Authorization': `Bearer ghp_xxx`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'name': 'MyProject',
    'private': false,
    'description': '成了！'
  })
}

fetch('https://api.github.com/user/repos', config)
  .then(res => res.json())
  .then(data => console.log(data))
