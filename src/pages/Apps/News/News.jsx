import React, { useState } from "react";

import { Grid } from "@mui/material";

import { useStateContext } from "../../../contexts/ContextProvider";
import { useNewsContext } from "../../../contexts/NewsProvider";
import { useComponentsContext } from "../../../contexts/ComponentsProvider";

const News = () => {
  const { currentColor } = useStateContext();
  const { news, fetchNewsQuery, countryQuery, setCountryQuery } =
    useNewsContext();
  const { SearchBar } = useComponentsContext();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setCountryQuery(searchQuery);
    fetchNewsQuery(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="mt-12">
      <div className="flex flex-col gap-10 flex-wrap justify-center items-center ">
        <SearchBar
          submitFunc={(e) => handleSearch(e)}
          placeholder="News..."
          value={searchQuery}
          setFunc={(e) => setSearchQuery(e.target.value)}
        />
        <div
          className={`scrollbar-thin  scrollbar-thumb-gray-400  dark:scrollbar-thumb-gray-200 overflow-hidden p-1`}
        >
          {news ? (
            <>
              <h1 className="text-2xl text-salte-700 dark:text-white font-semibold capitalize ml-3">
                Recherche actuelle : {countryQuery}
              </h1>
              <Grid container justifyContent="center" gap={4} justify="center">
                {news?.map((article) => (
                  <React.Fragment key={article.id}>
                    {article.media && article.author && (
                      <Grid
                        item
                        className=" p-3 flex flex-col items-center max-w-small md:max-w-medium"
                      >
                        <span
                          className={`h-64 w-64 rounded-xl bg-cover  mb-2 md:h-72 md:w-72`}
                          style={{
                            background: `url(${article.media})`,
                          }}
                        />

                        <p className="dark:text-white text-gray-700 md:min-h-[70px]">
                          {article.title}
                        </p>
                        <a
                          target="_blank "
                          href={`${article.link}`}
                          className="text-white text-xs my-2 font-bold p-2 rounded self-start"
                          style={{ background: currentColor }}
                        >
                          <p>Lire...</p>
                        </a>
                      </Grid>
                    )}
                  </React.Fragment>
                ))}
              </Grid>
            </>
          ) : (
            <h1 className="text-2xl text-salte-700 dark:text-white font-semibold">
              Aucune actualité à afficher..
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default News;
