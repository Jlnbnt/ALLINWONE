import React from "react";
import { createContext, useState, useContext } from "react";

import { radioData } from "../components/Utils/Utils";

const LofiContext = createContext();

export const LofiProvider = ({ children }) => {
  const [volume, setVolume] = useState(40);
  const [play, setPlay] = useState(false);
  const [song, setSong] = useState(0);

  const handleVolume = (event, newValue) => {
    setVolume(newValue);
  };
  const [radio, setRadio] = useState({
    title: radioData[0].title,
    url: radioData[0].url,
    img: radioData[0].img,
  });

  const nextSong = () => {
    setSong(song + 1);
    setRadio(radioData[song + 1]);
  };
  const prevSong = () => {
    setSong(song - 1);
    setRadio(radioData[song - 1]);
  };

  return (
    <LofiContext.Provider
      value={{
        play,
        setPlay,
        song,
        setRadio,
        radio,
        nextSong,
        prevSong,
        setSong,
        volume,
        setVolume,
        handleVolume,
      }}
    >
      {children}
    </LofiContext.Provider>
  );
};

export const useLofiContext = () => useContext(LofiContext);
