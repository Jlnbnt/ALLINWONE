import { useEffect } from "react";

import { FiSettings } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";

import { useStateContext } from "../contexts/ContextProvider";
import { useLofiContext } from "../contexts/LofiProvider";
import { useComponentsContext } from "../contexts/ComponentsProvider";

import MiniPlayer from "../pages/Apps/Lofi/MiniPlayer";
import ReactPlayer from "react-player/lazy";

const Navbar = () => {
  const { play, radio, volume } = useLofiContext();
  const { NavButton } = useComponentsContext();
  const {
    setActiveMenu,
    screenSize,
    setScreenSize,
    currentColor,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
    // eslint-disable-next-line
  }, [screenSize]);

  return (
    <div className="z-50 transition-all duration-1000 ease-in-out h-[50px] flex items-center justify-between p-2 fixed w-full dark:bg-slate-900 bg-gray-100 dark:text-slate-900 text-gray-200 ">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className=" flex items-center ">
        <MiniPlayer />
        {play && (
          <h4 className="text-xl mr-4 hidden sm:block font-semibold text-gray-700 dark:text-white">
            {radio.title}
          </h4>
        )}
        <ReactPlayer
          playsinline={false}
          url={radio.url}
          playing={play}
          width="100%"
          height="100%"
          controls={false}
          volume={volume / 100}
          style={{
            display: "none",
            pointerEvents: "none",
          }}
        />
        <div style={{ zIndex: "1000" }} className="ml-4">
          <NavButton
            title="
            Parametres"
            color={currentColor}
            icon={<FiSettings />}
            customFunc={() => setThemeSettings(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
