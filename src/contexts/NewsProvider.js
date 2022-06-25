import { createContext, useState, useContext } from "react";
import axios from "axios";

import { useEffect } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const API_KEY = process.env.REACT_APP_NEWS_KEY;
  const [news, setNews] = useState([]);
  const [countryQuery, setCountryQuery] = useState("france");

  const setCountry = (e) => {
    setCountryQuery(e.target.value);
  };

  const fetchNewsQuery = async (searchQuery) => {
    try {
      const response = await axios({
        url: `https://api.newscatcherapi.com/v2/search?q=${searchQuery}&lang=fr`,
        headers: {
          "x-api-key": API_KEY,
        },
      });
      const data = await response.data.articles;
      setNews(data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchNewsQuery(countryQuery);
    // eslint-disable-next-line
  }, []);

  return (
    <NewsContext.Provider
      value={{
        news,
        fetchNewsQuery,
        setCountryQuery,
        setCountry,
        setNews,
        countryQuery,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNewsContext = () => useContext(NewsContext);
