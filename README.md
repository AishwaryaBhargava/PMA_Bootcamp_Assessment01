# 🌤️ Weather Forecast App – PMA Bootcamp Assessment 01

Live Demo 👉 [https://AishwaryaBhargava.github.io/PMA_Bootcamp_Assessment01](https://AishwaryaBhargava.github.io/PMA_Bootcamp_Assessment01)

This project was built as part of the PM Accelerator Bootcamp **Software Engineer Intern - AI/ML Application** technical assessment. It is a dynamic weather forecast app built using **React + Vite**, powered by the **WeatherAPI.com** service.

---

## ✨ Features

- 🔍 Search by **city name**, **ZIP code**, **landmark**, or **GPS coordinates**
- 📍 One-click **“Use My Location”** using browser geolocation
- ⏱️ **24-hour hourly forecast** (scrollable)
- 📅 **5-day weather forecast**
- 🌤️ Displays current temperature, feels like, humidity, wind, and weather condition
- 🎨 Clean and responsive UI
- ⚡ Live deployment via GitHub Pages

---

## 🧪 Technologies Used

- React 19
- Vite
- Axios
- WeatherAPI.com
- GitHub Pages

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm installed

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/AishwaryaBhargava/PMA_Bootcamp_Assessment01.git
   cd PMA_Bootcamp_Assessment01
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Add your API key:
   - Create a `.env` file in the root directory
   - Add this line:
     ```
     VITE_WEATHER_API_KEY=your_api_key_here
     ```
   - Get your free API key from: [https://www.weatherapi.com/](https://www.weatherapi.com/)

4. Run the app locally:
   ```bash
   npm run dev
   ```

---

## 🌐 Deployment

This app is deployed using GitHub Pages:

```bash
npm run build
npm run deploy
```

The app is accessible at:  
👉 [https://AishwaryaBhargava.github.io/PMA_Bootcamp_Assessment01](https://AishwaryaBhargava.github.io/PMA_Bootcamp_Assessment01)

---

## 📁 Project Structure

```
/src
  ├── App.jsx        # Main React component
  ├── index.css      # Custom styles
  └── main.jsx       # App root
.env                 # Contains Weather API key
vite.config.js       # Vite configuration for GitHub Pages
```

---

## 🧠 Future Improvements (Part of Assessment 2)

- Add database integration
- Implement full CRUD for user searches and saved forecasts
- Build an Express + MongoDB backend

---

## 👤 Author

**Aishwarya Bhargava**  
[LinkedIn](https://www.linkedin.com/in/aishwarya-bhargava05/) | [Portfolio](https://aishwaryabhargava.github.io/portfolio/)
