import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const API_KEY = process.env.REACT_APP_WEATHER_KEY;
  const API_URI = process.env.REACT_APP_WEATHER_URI;
  const navigate = useNavigate();
  const [weatherQuery, setWeatherQuery] = useState("");
  const [weather, setWeather] = useState();
  const [forecast, setForecast] = useState();
  const cityStorage = localStorage.getItem("city");
  const cityStorageArr = JSON.parse(cityStorage);
  const [citiesData, setCitiesData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeather(weatherQuery);
    setWeatherQuery("");
  };

  const fetchWeather = async (weatherQuery) => {
    try {
      const response = await axios(
        `${API_URI}${weatherQuery}&units=metric&lang=fr&appid=${API_KEY}`
      );
      const result = response.data;
      const lon = result.coord.lon;
      const lat = result.coord.lat;
      try {
        const response = await axios(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&lang=fr&appid=${API_KEY}`
        );
        const data = response.data;
        setForecast(data);
      } catch (err) {}
      setWeather(result);
      navigate("/meteo/forecast");
    } catch (err) {
      setErrorMsg("Ville introuvable");
      setTimeout(() => {
        setErrorMsg("");
      }, 1500);
    }
  };
  //
  const fetchSavedCities = async () => {
    const cityStorage = localStorage.getItem("city");
    const fetchArr = cityStorage ? JSON.parse(cityStorage) : [];
    if (!cityStorage) return;

    try {
      const response = await Promise.all(
        fetchArr.map((savedCities) =>
          axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${savedCities}&units=metric&lang=fr&appid=${API_KEY}`
          )
        )
      );
      const data = await Promise.all(response.map((response) => response.data));
      setCitiesData(data);
    } catch (err) {}
  };
  //
  const saveCity = () => {
    if (!cityStorage) {
      localStorage.setItem("city", JSON.stringify([weather.name]));
      return;
    }
    if (cityStorageArr.length >= 5) {
      return;
    }
    if (!cityStorage.includes(weather.name)) {
      cityStorageArr.push(weather.name);
      localStorage.setItem("city", JSON.stringify(cityStorageArr));
      setCitiesData([...citiesData, weather]);
      return;
    }
  };

  const deleteCity = (params) => {
    const filteredStorage = JSON.parse(localStorage.getItem("city")).filter(
      (cityName) => cityName !== params
    );
    localStorage.setItem("city", JSON.stringify(filteredStorage));
    const updatedCities = citiesData.filter((cityName) => cityName !== params);
    setCitiesData(updatedCities);
    navigate("/meteo");
  };

  const getTime = (time) => {
    const getHours = new Date(time * 1000).getHours();
    const hours = getHours < "10" ? "0" + getHours : getHours;
    const getMinutes = new Date(time * 1000).getMinutes();
    const minutes = getMinutes < 10 ? "0" + getMinutes : getMinutes;
    return hours + "h" + minutes;
  };

  const getDays = (time) => {
    const days = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];
    return days[new Date(time * 1000).getDay()];
  };

  const handleOpen = (params) => {
    fetchWeather(params);
  };

  return (
    <WeatherContext.Provider
      value={{
        weather,
        setWeather,
        cityStorage,
        saveCity,
        deleteCity,
        fetchWeather,
        handleSubmit,
        weatherQuery,
        setWeatherQuery,
        fetchSavedCities,
        getDays,
        getTime,
        citiesData,
        handleOpen,
        forecast,
        errorMsg,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => useContext(WeatherContext);
