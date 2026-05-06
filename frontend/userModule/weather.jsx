import { useState } from "react";
import "../css/common.css";


export default function Weather() {
  const API_KEY = '95f25811ee67bca38cc6d01b4ee58d79';
  // By default we'll request metric units (Celsius). Change to 'imperial' for °F.
  const UNITS = 'metric';
  // ----------------------
  const base_url = "https://api.openweathermap.org/data/2.5/weather";
  let output = document.getElementById('output');
  let loc
  const [cityInput, setCity] = useState("");
  const [error, showError] = useState("");
  const [data, renderWeather] = useState({
    name: "",
    main: { temp: "", feels_like: "", humidity: "" },
    weather: [
    ],
  })
  function escapeHtml(unsafe) { return unsafe.replace(/[&<"'>]/g, function (m) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[m]; }); }

  function handleChange(e) {
    let { currentTarget: input } = e;
    setCity(input.value);
  }
  function handleData() {
    fetchWeatherByCity(cityInput);
  }
  async function fetchWeatherByCity(city) {
    if (!city) { showError('Please enter a city name.');
       return;
     }
    output.innerHTML = `<div class="small">Loading weather for <strong>${escapeHtml(city)}</strong>...</div>`;
    try {
      const url = `${base_url}?q=${encodeURIComponent(city)}&units=${UNITS}&appid=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) {
        if (res.status === 404)
          showError('City not found. Failed to fetch weather. Status: ' + res.status);
        renderWeather({})
      }else{
      const data = await res.json();
      renderWeather(data);
         showError("");
      }
    } catch (err) {
      showError(err.message);
        renderWeather({})
    }
  }
  function capitalize(s) { if (!s) return ''; return s.split(' ').map(w => w[0]?.toUpperCase() + w.slice(1)).join(' '); }

  async function fetchWeatherByCoords(lat, lon) {
    output.innerHTML = `<div class="small">Loading weather for your location...</div>`;
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${UNITS}&appid=${API_KEY}`;
      const res = await fetch(url);
      console.log(res.data)
      if (!res.ok) throw new Error('Failed to fetch weather for coordinates. Status: ' + res.status);
      const data = await res.json();
      renderWeather(data);
       showError("");
    } catch (err) {
      showError(err.message);
    }
  }

  const name1 = data.name ? data.name + (data.sys && data.sys.country ? (', ' + data.sys.country) : '') : "";
  const temp = data.name ? Math.round(data.main.temp) : "";
  const feels = data.name ? Math.round(data.main.feels_like) : "";
  const desc = data.name ? (data.weather && data.weather[0] ? data.weather[0].description : '') : "";
  const icon = data.name ? (data.weather && data.weather[0] ? data.weather[0].icon : null) : "";
  const humidity = data.name ? data.main.humidity : "";
  const wind = data.name ? data.wind.speed : "";
  const dt = data.name ? new Date(data.dt * 1000) : "";

  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : '';

  return (
    <div class="container common">
      <div class="card">
        <header>
          <h1 className="fw-bold h1 hd-common">⛅Weather Prediction</h1>
         </header>

        <div class="row">
          <div className="col-lg-10 mb-2">
          <input id="cityInput" name="cityInput" type="text" placeholder="Enter city name (e.g. Kanpur)" aria-label="City name"
            onChange={(e) => handleChange(e)} className="border form-control" /></div>
            <div className="col-lg-2">
          <button id="searchBtn"  onClick={handleData}>Get Weather</button>
          </div>
        </div>

        <div className="small">Or click <button id="locBtn" className="butt"
        onClick={()=>{
      if(!navigator.geolocation){
         showError('Geolocation is not supported in your browser.'); return; }
      output.innerHTML = `<div class="small">Requesting location permission...</div>`;
      navigator.geolocation.getCurrentPosition(pos=>{
        fetchWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
      }, err=>{
        showError('Could not get your location: ' + err.message);
      }, {timeout:10000});
    }}>Use my location</button> to use your device's location.</div>

        <div id="output" style={{ marginTop: "18px" }}></div>
        {data.clouds ?
          <div className="result">
            <div className="weather-icon">
              {iconUrl ? <img src={iconUrl} alt="${desc}" width="96" height="96" style={{ display: "block" }} /> : '☀️'}
            </div>
            <div>
              <div className="discrip">
                <div>
                  <h2 style={{ margin: 0 }}>{name1}</h2>
                  <div className="desc">{capitalize(desc)} — {dt.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p className="temp">{temp}°{UNITS === 'metric' ? 'C' : (UNITS === 'imperial' ? 'F' : 'K')}</p>
                  <div className="small">Feels like ${feels}°</div>
                </div>
              </div>

              <div style={{ height: "8px" }}></div>
              <div className="meta">
                <span>Humidity: {humidity}%</span>
                <span>Wind: {wind} {UNITS === 'metric' ? 'm/s' : 'mph'}</span>
                <span>Pressure: {data.main.pressure} hPa</span>
              </div>
            </div>
          </div>
        :    <p className="text-danger h4 pt-4" >{error}</p>}
      </div>
    </div>
  )
}