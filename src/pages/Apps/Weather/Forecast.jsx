import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { BsWind } from "react-icons/bs";
import { WiHumidity, WiBarometer, WiSunrise, WiSunset } from "react-icons/wi";
import { HiChevronLeft, HiOutlinePlusSm, HiX } from "react-icons/hi";

import { useStateContext } from "../../../contexts/ContextProvider";
import { useWeatherContext } from "../../../contexts/WeatherProvider";

const Forecast = () => {
  const navigate = useNavigate();
  const { currentColor } = useStateContext();
  const {
    weather,
    cityStorage,
    saveCity,
    deleteCity,
    getDays,
    getTime,
    forecast,
  } = useWeatherContext();

  useEffect(() => {
    if (!weather) {
      navigate("/meteo");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="flex gap-10 flex-wrap justify-center  ">
      {weather && (
        <div
          className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-5 rounded-2xl md:w-780 xs: w-350"
          style={{ border: `2px solid ${currentColor}` }}
        >
          <div className="flex justify-between px-5 pb-5">
            <HiChevronLeft
              onClick={() => {
                navigate(-1);
              }}
              style={{
                fontSize: "30px",
                cursor: "pointer",
                color: currentColor,
              }}
            />
            {cityStorage?.includes(weather.name) ? (
              <HiX
                onClick={() => {
                  deleteCity(weather.name);
                }}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  color: currentColor,
                }}
              />
            ) : (
              <HiOutlinePlusSm
                onClick={() => {
                  saveCity();
                }}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  color: currentColor,
                }}
              />
            )}
          </div>
          <p className="font-semibold text-3xl mb-2">{weather.name}</p>
          <div className="flex justify-around items-center rounded-xl dark:bg-secondary-dark-bg">
            <div className=" flex flex-col items-centers">
              <p className="font-semibold text-5xl m-3">
                {forecast.current.temp.toFixed(1)}°
              </p>
              <p
                style={{ backgroundColor: currentColor }}
                className="font-semibold text-lg p-2 rounded-md flex justify-center capitalize text-white"
              >
                {forecast.current.weather[0].description}
              </p>
            </div>
            <img
              loading="lazy"
              src={`https://openweathermap.org/img/wn/${forecast.current.weather[0].icon}@2x.png`}
              alt="Weather Symbol"
            />
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="w-full">
              <div className="flex justify-between font-semibold text-sm">
                <p className="flex items-center">
                  <WiHumidity size={30} /> {forecast.current.humidity} %
                </p>
                <p className="flex items-center pr-3 pl-3">
                  <WiBarometer size={30} /> {forecast.current.pressure}
                  mBar
                </p>
                <p className="flex items-center">
                  <BsWind className="mr-2" size={25} />
                  {forecast.current.wind_speed} km/h
                </p>
              </div>
              <div className="mt-8 flex justify-between font-semibold text-lg ">
                <p className="text-lg font-semibold flex">
                  <WiSunrise size={30} />
                  {getTime(forecast.current.sunrise)}
                </p>
                <p className="text-lg font-semibold flex">
                  {getTime(forecast.current.sunset)}
                  <WiSunset size={30} />
                </p>
              </div>
              <div className="mt-10">
                <p className=" text-lg font-semibold">Aujourd'hui</p>
                <div
                  className={`flex justify-between pt-5 overflow-auto  
                 scrollbar-thin  scrollbar-thumb-gray-400  dark:scrollbar-thumb-gray-200`}
                >
                  {forecast.hourly.slice(0, 24).map((hourlyWeather) => (
                    <div
                      className="flex flex-col items-center p-2"
                      key={hourlyWeather.dt}
                    >
                      <p className="text-lg font-semibold">
                        {getTime(hourlyWeather.dt)}
                      </p>
                      <span>
                        <img
                          loading="lazy"
                          src={`https://openweathermap.org/img/wn/${hourlyWeather.weather[0].icon}@2x.png`}
                          alt=""
                          className="w-15 h-15"
                        />
                      </span>
                      <p className="text-lg font-semibold">
                        {hourlyWeather.temp.toFixed(1)}°
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between gap-5 items-center">
                {forecast.daily.slice(0, 3).map((nextDaysWeather) => (
                  <div
                    className="flex justify-between items-center w-4/5"
                    key={nextDaysWeather.dt}
                  >
                    <p className="text-lg font-semibold">
                      {getDays(nextDaysWeather.dt)}
                    </p>
                    <span>
                      <img
                        loading="lazy"
                        src={`https://openweathermap.org/img/wn/${nextDaysWeather.weather[0].icon}@2x.png`}
                        alt=""
                        className="w-15 h-15 flex"
                      />
                    </span>
                    <div className="flex">
                      <p className="text-lg font-semibold mr-2 ">
                        {nextDaysWeather.temp.max.toFixed(1)}°
                      </p>
                      <p className="text-lg font-semibold ">
                        {nextDaysWeather.temp.min.toFixed(1)}°
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forecast;
