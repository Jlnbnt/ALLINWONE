import {
  MdOutlineCancel,
  MdOutlineDarkMode,
  MdOutlineLightMode,
} from "react-icons/md";
import { BsCheck } from "react-icons/bs";
import { Radio } from "@mui/material";

import { themeColors } from "./Utils/Utils";

import { useStateContext } from "../contexts/ContextProvider";
import { useEffect, useRef } from "react";

const ThemeSettings = () => {
  const ref = useRef();

  const {
    setColor,
    setMode,
    currentMode,
    currentColor,
    setThemeSettings,
    themeSettings,
    menuTheme,
  } = useStateContext();

  useEffect(() => {
    if (themeSettings) {
      menuTheme(ref);
    }
    // eslint-disable-next-line
  }, [themeSettings]);
  return (
    <div className="bg-half-transparent w-250 md:w-400 fixed top-0 right-0 z-50 sidebar">
      <div
        className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] "
        ref={ref}
      >
        <div className="flex justify-between items-center p-4 ml-4 ">
          <p className="font-semibold text-xl">Parametres</p>
          <button
            type="button"
            onClick={() => setThemeSettings(false)}
            style={{ color: "rgb(153, 171, 180", borderRadius: "50%" }}
            className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
          >
            <MdOutlineCancel style={{ color: currentColor }} />
          </button>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4 ">
          <p className="font-semibold text-lg">Mode</p>
          <div className="flex">
            <div className="mt-4 mr-5 flex items-center">
              <Radio
                type="radio"
                id="light"
                name="theme"
                value="Light"
                className="cursor-pointer"
                onChange={setMode}
                checked={currentMode === "Light"}
                sx={{
                  color: currentColor,
                  "&.Mui-checked": {
                    color: currentColor,
                  },
                }}
              />
              <MdOutlineLightMode className="text-2xl text-gray-700 dark:text-white" />
            </div>
            <div className="mt-4  flex items-center">
              <Radio
                type="radio"
                id="dark"
                name="theme"
                value="Dark"
                className="cursor-pointer"
                onChange={setMode}
                checked={currentMode === "Dark"}
                sx={{
                  color: currentColor,
                  "&.Mui-checked": {
                    color: currentColor,
                  },
                }}
              />
              <MdOutlineDarkMode
                className="text-2xl text-gray-700 dark:text-white"
                style={{ color: currentColor }}
              />
            </div>
          </div>
        </div>
        <div className="flex-col border-t-1 border-color p-4 ml-4  ">
          <p className="font-semibold text-lg ">Couleurs</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            {themeColors.map((item, index) => (
              <div
                key={index}
                className="relative mp-2 cursor-pointer flex gap-5 items-center"
              >
                <button
                  type="button"
                  className="h-10 w-10 rounded-full cursor-pointer hover:drop-shadow-xl"
                  style={{ backgroundColor: item.color }}
                  onClick={() => setColor(item.color)}
                >
                  <BsCheck
                    className={`ml-2 text-2xl text-white ${
                      item.color === currentColor ? "block" : "hidden"
                    } `}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSettings;
