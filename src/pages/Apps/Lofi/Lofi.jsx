import React from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, CircularProgress } from "@mui/material";

import Player from "./Player";

import { radioData } from "../../../components/Utils/Utils";

import { useStateContext } from "../../../contexts/ContextProvider";
import { useLofiContext } from "../../../contexts/LofiProvider";
import { useComponentsContext } from "../../../contexts/ComponentsProvider";

export default function Lofi() {
  const { currentColor, page, rowsPerPage } = useStateContext();
  const { setPlay, setSong, setRadio, radio } = useLofiContext();
  const { TableStylePagination } = useComponentsContext();

  return (
    <div className="mt-12  md:mx-3">
      <Box className="flex items-center">
        <Typography className="ml-5 mb-2 text-lg  font-medium dark:text-white text-gray-700">
          {radio.title}
        </Typography>
      </Box>
      <div className="flex flex-col gap-10 flex-wrap justify-center items-center">
        <Player />
        <Paper className="w-full overflow-hidden max-w-7xl">
          <TableContainer className="max-h-90 scrollbar-thin ">
            <Table stickyHeader className="table-auto">
              <TableHead
                sx={{
                  "& .MuiTableCell-stickyHeader": {
                    backgroundColor: currentColor,
                  },
                }}
              >
                <TableRow>
                  <TableCell className="font-medium text-xl text-white">
                    Stations Radio
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {radioData ? (
                  radioData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((item) => {
                      return (
                        <TableRow
                          className="cursor-pointer"
                          hover
                          tabIndex={-1}
                          key={item.id}
                          onClick={() => {
                            setRadio({
                              title: item.title,
                              url: item.url,
                              img: item.img,
                            });
                            setSong(item.id - 1);
                            setPlay(true);
                          }}
                        >
                          <TableCell className="flex items-center justify-between font-medium text-base ">
                            <span className="flex-1 md:mx-24">
                              {item.title}
                            </span>
                            <span>
                              <img
                                loading="lazy"
                                src={item.img}
                                alt="Radio thumbnail"
                                className="  w-32 rounded-xl flex-1 md:mx-24"
                              />
                            </span>
                          </TableCell>
                        </TableRow>
                      );
                    })
                ) : (
                  <tr>
                    <CircularProgress
                      className="m-2"
                      style={{ color: currentColor }}
                    />
                  </tr>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TableStylePagination rowCount={radioData} pageRow={[5, 10, 25]} />
        </Paper>
      </div>
    </div>
  );
}
