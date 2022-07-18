import React from "react";
import { createContext, useContext } from "react";

import { HiOutlineSearch } from "react-icons/hi";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import Tooltip from "@mui/material/Tooltip";

import { useStateContext } from "./ContextProvider";

const ComponentsContext = createContext();

export const ComponentsProvider = ({ children }) => {
  const {
    currentColor,
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useStateContext();

  const TableHeadCell = ({ text }) => {
    return (
      <TableCell className="font-medium text-md text-white">{text}</TableCell>
    );
  };

  const SearchBar = ({ placeholder, value, setFunc, submitFunc }) => {
    return (
      <form
        className="flex border-2 rounded items-center justify-center px-3 dark:text-gray-200 "
        style={{ border: `1px solid ${currentColor}` }}
        onSubmit={submitFunc}
      >
        <HiOutlineSearch
          className="dark:text-gray-200 mr-3"
          size={20}
          style={{ color: currentColor }}
        />
        <input
          type="text"
          autoComplete="off"
          className="py-2 w-60 bg-transparent placeholder-black dark:placeholder-gray-200 outline-none md:w-80"
          placeholder={placeholder}
          value={value}
          onChange={setFunc}
        />
      </form>
    );
  };

  const TableStylePagination = ({ rowCount, pageRow }) => {
    return (
      <TablePagination
        count={rowCount ? rowCount.length : 0}
        component="div"
        rowsPerPageOptions={pageRow}
        labelRowsPerPage={"Lignes par pages"}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        className="text-white"
        sx={{
          "& .MuiSvgIcon-root": {
            color: "white",
          },
          "& .MuiToolbar-gutters": {
            backgroundColor: currentColor,
          },
        }}
      />
    );
  };

  const NavButton = ({ title, customFunc, icon, dotColor, color }) => (
    <Tooltip title={title} placement="bottom">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className="relative text-xl rounded-full p-3 hover:bg-light-gray cursor-pointer"
      >
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
        {icon}
      </button>
    </Tooltip>
  );

  return (
    <ComponentsContext.Provider
      value={{
        TableHeadCell,
        SearchBar,
        TableStylePagination,
        NavButton,
      }}
    >
      {children}
    </ComponentsContext.Provider>
  );
};

export const useComponentsContext = () => useContext(ComponentsContext);
