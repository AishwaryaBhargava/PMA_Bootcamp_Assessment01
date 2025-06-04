import { useState } from 'react';
import axios from 'axios';
import './index.css';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

function App() {
  const [location, setLocation] = useState('');
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [hourly, setHourly] = useState([]);
  const [error, setError] = useState('');
  const [showMeModal, setShowMeModal] = useState(false);
  const [showCompanyModal, setShowCompanyModal] = useState(false);

  const fetchWeather = async () => {
    try {
      const input = location.trim();
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(input)}&days=5&aqi=no&alerts=no`;
      const response = await axios.get(url);
      const data = response.data;

      setCurrent(data.current);
      setForecast(data.forecast.forecastday);
      setHourly(data.forecast.forecastday[0].hour);
      setError('');
    } catch (err) {
      console.error(err);
      setError('⚠️ Unable to fetch weather. Please check the input.');
      setCurrent(null);
      setForecast([]);
      setHourly([]);
    }
  };

  const getMyLocationWeather = () => {
    if (!navigator.geolocation) {
      setError("⚠️ Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${lat},${lon}&days=5&aqi=no&alerts=no`;
        const response = await axios.get(url);
        const data = response.data;

        setCurrent(data.current);
        setForecast(data.forecast.forecastday);
        setHourly(data.forecast.forecastday[0].hour);
        setError('');
      } catch (err) {
        console.error(err);
        setError('⚠️ Could not get weather for your location.');
      }
    }, () => {
      setError("⚠️ Permission denied or unable to retrieve your location.");
    });
  };

  return (
    <div className="container">
      <h1>🌤️ Weather Forecast App</h1>
      <p style={{ fontStyle: 'italic', marginBottom: '0.5rem' }}>By Aishwarya Bhargava</p>
      <input
        type="text"
        placeholder="🔍 Enter city, ZIP, landmark, or GPS (lat,lon)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div style={{ marginTop: '1rem' }}>
        <button onClick={fetchWeather}>🔎 Get Weather</button>
        <button onClick={getMyLocationWeather} style={{ marginLeft: '1rem' }}>📍 Use My Location</button>
        <button onClick={() => setShowMeModal(true)} style={{ marginLeft: '1rem' }}>👩 About Me</button>
        <button onClick={() => setShowCompanyModal(true)} style={{ marginLeft: '1rem' }}>🏢 About PMA</button>
      </div>

      {error && <p className="error">{error}</p>}

      {current && (
        <>
          <div className="current">
            <h2>📍 Weather in {location}</h2>
            <p>🌡️ Temp: {current.temp_c}°C | 🤒 Feels like: {current.feelslike_c}°C</p>
            <p>💧 Humidity: {current.humidity}% | 💨 Wind: {current.wind_kph} kph</p>
            <img src={current.condition.icon} alt="condition" />
            <p>{current.condition.text}</p>
          </div>

          <div>
            <h3>⏰ Hourly Forecast (Today)</h3>
            <div className="forecast-row">
              {hourly.map((hour, idx) => (
                <div key={idx} className="card">
                  <p>{hour.time.split(' ')[1]}</p>
                  <img src={hour.condition.icon} alt="icon" />
                  <p>{hour.temp_c}°C</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3>📅 5-Day Forecast</h3>
            <div className="forecast-row">
              {forecast.map((day, idx) => (
                <div key={idx} className="card">
                  <p>{day.date}</p>
                  <img src={day.day.condition.icon} alt="icon" />
                  <p>🌡️ {day.day.avgtemp_c}°C</p>
                  <p>{day.day.condition.text}</p>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Me Modal */}
      {showMeModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>👩 About Me</h2>
            <p>Hi! I'm Aishwarya Bhargava, a passionate developer and AI/ML enthusiast. This project is part of my PMA Bootcamp submission.</p>
            <div className="button-group">
              <a href="https://www.linkedin.com/in/aishwarya-bhargava05/" target="_blank">LinkedIn</a>
              <a href="https://aishwaryabhargava.github.io/portfolio" target="_blank">Portfolio</a>
              <a href="https://github.com/AishwaryaBhargava" target="_blank">Github</a>
              <a href="https://drive.google.com/file/d/1avUlVvvZ8sL2paWo039QmMamMaf2c5th/view?usp=drive_link" target="_blank">Resume</a>
            </div>
            <button onClick={() => setShowMeModal(false)}>Close</button>
          </div>
        </div>
      )}

      {/* PMA Modal */}
      {showCompanyModal && (
        <div className="modal">
          <div className="modal-content">
            <h2>🏢 About PM Accelerator</h2>
            <p>
              PM Accelerator is a global career launch platform helping students and early professionals gain practical experience
              in software development and product management by building real-world AI/ML products.
            </p>
            <div className="button-group">
              <a href="https://www.linkedin.com/company/pmaccelerator" target="_blank">LinkedIn</a>
              <a href="https://www.pmaccelerator.io/AI-ML-Software-Engineer-Intern" target="_blank">Internship Page</a>
              <a href="https://www.pmaccelerator.io/" target="_blank">Official Website</a>
            </div>
            <button onClick={() => setShowCompanyModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
