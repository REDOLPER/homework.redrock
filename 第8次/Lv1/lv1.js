fetch('https://api.openweathermap.org/data/2.5/weather?q=Chongqing&appid=4507f8ad0f8fe0b8211b1148019b38cf&units=metric&lang=zh_cn')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  
    const city = document.createElement('p');
    city.textContent = `${data.name}, ${data.sys.country}`;

    const temperature = document.createElement('p');
    temperature.textContent = `temperature: ${data.main.temp}°C`;

    const weather = document.createElement('p');
    weather.textContent = `weather: ${data.weather[0].main}`

    document.body.appendChild(city);
    document.body.appendChild(temperature);
    document.body.appendChild(weather);
  });

//虽然但是，API密钥真的不应该写在js里呀，更不用说还要提交到github公开仓库中（不过毕竟是免费的哈哈哈）
//但是我不会创建代理服务器啊啊啊我好菜
