import "./App.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { Navbar, Sidebar, ThemeSettings } from "./components";
import {
  HomePage,
  Weather,
  Forecast,
  Crypto,
  CryptoDetails,
  Lofi,
  News,
  Missing,
} from "./pages";

import { useStateContext } from "./contexts/ContextProvider";

const App = () => {
  const { activeMenu, themeSettings, currentMode, firstSetup } =
    useStateContext();

  useEffect(() => {
    firstSetup();
    // eslint-disable-next-line
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        {activeMenu ? (
          <div
            className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white "
            style={{
              zIndex: "1000",
            }}
          >
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg ">
            <Sidebar />
          </div>
        )}
        <div
          className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72 " : "flex-2 "
          }`}
        >
          <div className="static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div className="mt-20">
            {themeSettings && <ThemeSettings />}

            <Routes>
              {/* Dashboard */}
              <Route path="/" element={<HomePage />} />
              <Route path="/accueil" element={<HomePage />} />

              {/* Apps */}
              <Route path="/meteo" element={<Weather />} />
              <Route path="/meteo/forecast" element={<Forecast />} />
              <Route path="/crypto" element={<Crypto />} />
              <Route path="/crypto/details" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />

              {/* Entertainments */}
              <Route path="/lofi" element={<Lofi />} />

              {/* Catch All */}
              <Route path="*" element={<Missing />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
