import { useEffect } from "react";

import { WiHumidity } from "react-icons/wi";
import { BsWind } from "react-icons/bs";

import { useWeatherContext } from "../../../contexts/WeatherProvider";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useComponentsContext } from "../../../contexts/ComponentsProvider";

const Weather = () => {
  const { currentColor } = useStateContext();
  const { SearchBar } = useComponentsContext();
  const {
    handleSubmit,
    weatherQuery,
    setWeatherQuery,
    fetchSavedCities,
    citiesData,
    handleOpen,
    cityStorage,
    errorMsg,
  } = useWeatherContext();

  useEffect(() => {
    fetchSavedCities();
    if (!cityStorage) {
      localStorage.setItem("city", JSON.stringify([]));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mt-12">
      <div className="flex flex-col gap-10 flex-wrap justify-center items-center ">
        <SearchBar
          submitFunc={(e) => handleSubmit(e)}
          placeholder="Ville..."
          value={weatherQuery}
          setFunc={(e) => setWeatherQuery(e.target.value)}
        />
        {errorMsg && (
          <h1 className="text-slate-700 dark:text-white text-xl">{errorMsg}</h1>
        )}
        <div className="flex gap-5 flex-wrap justify-center">
          {citiesData.length ? (
            citiesData.map((savedCities) => (
              <div
                key={savedCities.id}
                onClick={() => handleOpen(savedCities.name)}
                className="  relative flex flex-col justify-between items-center bg-white dark:text-gray-200 dark:bg-secondary-dark-bg p-4 rounded-2xl h-40 w-40 cursor-pointer"
                style={{ border: `2px solid ${currentColor}` }}
              >
                <div className="flex">
                  <div>
                    <span className="text-lg font-semibold">
                      {savedCities.main.temp.toFixed(1)}°
                    </span>
                    <p className="text-sm text-gray-400">{savedCities.name}</p>
                    <p className="text-sm text-gray-400">
                      {savedCities.sys.country}
                    </p>
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src={`https://openweathermap.org/img/wn/${savedCities.weather[0].icon}@2x.png`}
                      alt="Weather Symbol"
                    />
                  </div>
                </div>
                <div className="flex justify-between w-full">
                  <p className="flex items-center text-xs">
                    <WiHumidity className="mr-1 " size={20} />
                    {savedCities.main.humidity}%
                  </p>
                  <p className="flex items-center text-xs">
                    <BsWind className="mr-1" size={18} />
                    {savedCities.wind.speed.toFixed(1)}km/h
                  </p>
                </div>
              </div>
            ))
          ) : (
            <h1
              className="text-xl font-semibold"
              style={{ color: currentColor }}
            >
              Vos villes favorites apparaîtront ici.
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Weather;
