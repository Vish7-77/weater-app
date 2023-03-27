


const fetchWeatherData = async () => {

    const inp = document.getElementById('inp').value
    const url = `http://api.weatherapi.com/v1/current.json?key=af99d149c95f48c0a0e100642232703&q=${inp}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.current)
      console.log(data.current.condition.text);
      const main = document.getElementById('cel')
      const main2 = document.getElementById('far')
      const main3 = document.getElementById('condition')
      main.innerText=data.current.temp_c
      main2.innerText=data.current.temp_f
      main3.innerText=data.current.condition.text
document.getElementById('flex').style.display= 'flex'




    } catch (error) {
      console.log(error);
    }
  };
  




