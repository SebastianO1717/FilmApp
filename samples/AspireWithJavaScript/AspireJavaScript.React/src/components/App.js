import { useEffect, useState } from "react";
import "./App.css";

// Import your images
import mountainsImage from "..//images//mountains.jpg";
import photoImage from "..//images//photo.jpg";
import snowyImage from "..//images//snowy.jpg";

function App() {
  const [forecasts, setForecasts] = useState([]);

    // Sample data with imported images
    const photoCollection = [
        {
            title: "In the mountains",
            image: mountainsImage,
            date: "09/01/2024",
            location: "Tolmie Peak, WA"
        },
        {
            title: "Golden Hour",
            image: photoImage,
            date: "08/15/2024",
            location: "St. Augustine, FL"
        },
        {
            title: "The snowy neighborhood",
            image: snowyImage,
            date: "02/01/2025",
            location: "Seattle, WA"
        },
    ];

    const weatherJson = await weather.json();
    console.log(weatherJson);

    setForecasts(weatherJson);
  };

  useEffect(() => {
    requestWeather();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather</h1>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Temp. (C)</th>
              <th>Temp. (F)</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            {(
              forecasts ?? [
                {
                  date: "N/A",
                  temperatureC: "",
                  temperatureF: "",
                  summary: "No forecasts",
                },
              ]
            ).map((w) => {
              return (
                <tr key={w.date}>
                  <td>{w.date}</td>
                  <td>{w.temperatureC}</td>
                  <td>{w.temperatureF}</td>
                  <td>{w.summary}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
