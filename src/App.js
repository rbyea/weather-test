import React from 'react';

import './App.css';

function App() {

  const [tempKrasnodar, setTempKrasnodar] = React.useState({})
  const [locationLat, setLocationLat] = React.useState(45.0328)
  const [locationLon, setLocationLan] = React.useState(38.9769)

  const location = [
    {
      lat: 45.0328,
      lon: 38.9769,
    },
    {
      lat: 57.1914,
      lon: 39.4139,
    },
    {
      lat: 44.690,
      lon: 37.590,
    }
  ]

  React.useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${locationLat}&lon=${locationLon}&units=imperial&appid=c5ffae3ef5fdaeccce4be562bb7e8e21`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return setTempKrasnodar(data)
      });
  }, [locationLat], [locationLon], [tempKrasnodar]);

  const selectHundlerValue = (event) => {
    setLocationLat(location[event.target.value].lat);
    setLocationLan(location[event.target.value].lon)
  }

  if(!Object.keys(tempKrasnodar).length) {
    return <div className='container'>
      Загрузка...
    </div>
  }

  return (
    <div className="App">

      <div className="container">
        <div className="city-wrapper">

          <select onChange={selectHundlerValue}>
            <option value="0">Краснодар</option>
            <option value="1">Ростов-на-Дону</option>
            <option value="2">Абрау-Дюрсо</option>
          </select>

          <div className="city-item">
            <div className="city-item__list">
              <img src={`http://openweathermap.org/img/w/${tempKrasnodar.weather[0].icon}.png`} alt="" />
              <h2>
                {tempKrasnodar.name} / {tempKrasnodar.sys.country} 
              </h2>
            </div>

            <span>
              {
                Math.round((tempKrasnodar.main.temp_min - 32) / 1.8)
              }
               °С - 
              {
                Math.round((tempKrasnodar.main.temp_max - 32) / 1.8)
              } °С
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
