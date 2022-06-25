import { createContext, useContext, useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const API_URI = process.env.REACT_APP_CRYPTO_URI;
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [crypto, setCrypto] = useState();

  const handleSearch = () => {
    return crypto.filter((coin) =>
      coin.id
        .toLowerCase()
        .includes(search.toLowerCase() || search.toUpperCase())
    );
  };

  const handleClick = (id) => {
    fetchCryptoById(id);
  };

  const fetchCrypto = async () => {
    try {
      const response = await axios(API_URI);
      const data = await response.data;
      setCrypto(data);
    } catch (err) {}
  };

  const fetchCryptoById = async (id) => {
    try {
      const response = await axios(`${API_URI}/${id}`);
      const data = await response.data;
      setCrypto([data]);
      navigate("/crypto/details");
    } catch (err) {}
  };

  const getDifDate = (params) => {
    const today = new Date();
    const date = new Date(params);
    const monthDif = today.getMonth() - date.getMonth();
    const yearDif = 12 * (today.getFullYear() - date.getFullYear());
    const fullDif = monthDif + yearDif;

    return fullDif > 0 && fullDif < 12
      ? `${fullDif} months`
      : fullDif === 12
      ? `1 year ago`
      : `~ ${yearDif / 12} years`;
  };

  const getDateFormat = (params) => {
    const months = [
      "Janv",
      "Fevr",
      "Mars",
      "Avr",
      "Main",
      "Juin",
      "Juill",
      "Aout",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const date = new Date(params);
    return `${date.getUTCDate()} ${
      months[date.getUTCMonth()]
    }, ${date.getUTCFullYear()} `;
  };
  return (
    <CryptoContext.Provider
      value={{
        crypto,
        setCrypto,
        fetchCrypto,
        fetchCryptoById,
        search,
        setSearch,
        handleSearch,
        handleClick,
        getDifDate,
        getDateFormat,
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};

export const useCryptoContext = () => useContext(CryptoContext);
