import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { disableReactDevTools } from "@fvilers/disable-react-devtools";

import App from "./App";
import "./index.css";

import { ContextProvider } from "./contexts/ContextProvider";
import { WeatherProvider } from "./contexts/WeatherProvider";
import { CryptoProvider } from "./contexts/CryptoProvider";
import { LofiProvider } from "./contexts/LofiProvider";
import { NewsProvider } from "./contexts/NewsProvider";
import { ComponentsProvider } from "./contexts/ComponentsProvider";

if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ContextProvider>
        <WeatherProvider>
          <CryptoProvider>
            <LofiProvider>
              <NewsProvider>
                <ComponentsProvider>
                  <App />
                </ComponentsProvider>
              </NewsProvider>
            </LofiProvider>
          </CryptoProvider>
        </WeatherProvider>
      </ContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
