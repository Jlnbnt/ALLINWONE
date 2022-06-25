import { Link } from "react-router-dom";

import { useStateContext } from "../contexts/ContextProvider";

import { homeApps } from "../components/Utils/Utils";

const HomePage = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="my-12">
      <div className="flex flex-wrap justify-center gap-4">
        {homeApps.map((app) => (
          <Link
            key={app.title}
            to={app.link}
            className=" flex flex-col items-center justify-center  cursor-pointer lg: m-4"
          >
            <div
              className="flex items-center justify-center rounded-full w-16 h-16 m-5 lg:w-32 lg:h-32"
              style={{ border: `2px solid ${currentColor}` }}
            >
              <div className="text-slate-700 dark:text-white text-3xl lg:text-6xl">
                {app.icon}
              </div>
            </div>
            <h4 className="font-semibold text-lg text-slate-700 dark:text-white">
              {app.title}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
