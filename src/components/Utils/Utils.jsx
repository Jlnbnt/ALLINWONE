import { FiSun } from "react-icons/fi";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsMusicNote, BsCurrencyBitcoin } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

/* SideMenu component */
export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "accueil",
        icon: <AiOutlineHome />,
      },
    ],
  },
  {
    title: "Apps",
    links: [
      {
        name: "meteo",
        icon: <FiSun />,
      },
      {
        name: "crypto",
        icon: <BsCurrencyBitcoin />,
      },
      {
        name: "news",
        icon: <IoNewspaperOutline />,
      },
    ],
  },
  {
    title: "Entertainements",
    links: [
      {
        name: "lofi",
        icon: <BsMusicNote />,
      },
    ],
  },
];

/* ThemeColors */
export const themeColors = [
  {
    name: "blue-theme",
    color: "#1A97F5",
  },
  {
    name: "cream-theme",
    color: "#CDC2AE",
  },
  {
    name: "green-theme",
    color: "#92BA92",
  },
  {
    name: "orange-theme",
    color: "#FDAF75",
  },
  {
    name: "purple-theme",
    color: "#2E0249",
  },
  {
    name: "blue-theme",
    color: "#03C9D7",
  },
  {
    name: "purple-theme",
    color: "#7352FF",
  },
  {
    name: "red-theme",
    color: "#FF5C8E",
  },
  {
    name: "indigo-theme",
    color: "#1E4DB7",
  },
  {
    name: "red-theme",
    color: "#F24C4C",
  },
];

/* MainApps component */
export const homeApps = [
  {
    title: "Lofi Radio",
    img: "https://images.pexels.com/photos/3783471/pexels-photo-3783471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/lofi",
    icon: <BsMusicNote />,
  },
  {
    title: "Météo",
    img: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/meteo",
    icon: <FiSun />,
  },
  {
    title: "Crypto",
    img: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/crypto",
    icon: <BsCurrencyBitcoin />,
  },
  {
    title: "News",
    img: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/news",
    icon: <IoNewspaperOutline />,
  },
];

/* Radio component */
export const radioData = [
  {
    id: 1,
    title: "Coffee Shop",
    url: "https://www.youtube.com/watch?v=-5KAN9_CzSA",
    img: "https://i.ytimg.com/vi/-5KAN9_CzSA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAPFDzM2KsVstWBeVQhAcm3MeP2mg",
  },
  {
    id: 2,
    title: "Coding in Chicago",
    url: "https://www.youtube.com/watch?v=8rnRnHC_RY8",
    img: "https://i.ytimg.com/vi/8rnRnHC_RY8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDZs2JUx6tgJ3E7tggSH5Y7y1Ba_A",
  },
  {
    id: 3,
    title: "Good Vibes Only",
    url: "https://www.youtube.com/watch?v=aGSYKFb_zxg",
    img: "https://i.ytimg.com/vi/aGSYKFb_zxg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDOSP2D_WNMfKJaxWhFk6CAAtL-nw",
  },
  {
    id: 4,
    title: "Jazz Chill Beats",
    url: "https://www.youtube.com/watch?v=kgx4WGK0oNU",
    img: "https://i.ytimg.com/vi/kgx4WGK0oNU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6IPcEamo4HDcFRbRAx80eHY3ePw",
  },
  {
    id: 5,
    title: "ChillRadio 24/7",
    url: "https://www.youtube.com/watch?v=ceqgwo7U28Y",
    img: "https://i.ytimg.com/vi/ceqgwo7U28Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAm33o4ZH5WdMkFTVLiO49Ji27CSg",
  },
  {
    id: 6,
    title: "ChillHop Music",
    url: "https://www.youtube.com/watch?v=7NOSDKb0HlU",
    img: "https://i.ytimg.com/vi/7NOSDKb0HlU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDbJ9u9pHzMX5PNUQtMPXg_RZ6L9g",
  },
  {
    id: 7,
    title: "Anime Radio",
    url: "https://www.youtube.com/watch?v=WDXPJWIgX-o",
    img: "https://i.ytimg.com/vi/WDXPJWIgX-o/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD5ppCZ18qs8ii5MF-XJMZNz6YnDA",
  },
  {
    id: 8,
    title: "Japanese Lofi",
    url: "https://www.youtube.com/watch?v=-9gEgshJUuY",
    img: "https://i.ytimg.com/vi/-9gEgshJUuY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC8LqSP-0QSu8LDo264P-iRQRx0cA",
  },
  {
    id: 9,
    title: "Jazzy Beats",
    url: "https://www.youtube.com/watch?v=5yx6BWlEVcY",
    img: "https://i.ytimg.com/vi/5yx6BWlEVcY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgU8C3A0_EB02iQ2cWolnacaHIgg",
  },
  {
    id: 10,
    title: "Rain Sound Lofi",
    url: "https://www.youtube.com/watch?v=zamNv893kHI",
    img: "https://i.ytimg.com/vi/zamNv893kHI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBJV8dOYv0__r4OeHyAEQt7BfwYeQ",
  },
  {
    id: 11,
    title: "24/7 Relax Beats",
    url: "https://www.youtube.com/watch?v=zVqJv_dKUEs",
    img: "https://i.ytimg.com/vi/zVqJv_dKUEs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCm-rnmhutP65C0BhNNeWuvXplIgA",
  },
  {
    id: 12,
    title: "Study / Relax",
    url: "https://www.youtube.com/watch?v=5qap5aO4i9A",
    img: "https://i.ytimg.com/vi/5qap5aO4i9A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB6KAYW8BN9j5s-5nSSxs_g3DdfmA",
  },
  {
    id: 13,
    title: "Sad and Sleepy",
    url: "https://www.youtube.com/watch?v=vq3IvvNe7VY",
    img: "https://i.ytimg.com/vi/vq3IvvNe7VY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGBS9KumRpm6NjX_2wZ4WqnSo-Hg",
  },
  {
    id: 14,
    title: "Sleep / Chill",
    url: "https://www.youtube.com/watch?v=DWcJFNfaw9c",
    img: "https://i.ytimg.com/vi/DWcJFNfaw9c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsu-7wmW8ivXm1rTot0A8HB0LaQQ",
  },
  {
    id: 15,
    title: "Lofi Fruit",
    url: "https://www.youtube.com/watch?v=xVQgD6QG2Zc",
    img: "https://i.ytimg.com/vi/xVQgD6QG2Zc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBgIacbtwGGwLpxEe31Pp0I1hD-Lw",
  },
];
