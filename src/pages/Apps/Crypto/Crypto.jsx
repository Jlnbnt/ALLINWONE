import * as React from "react";
import { useEffect } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { CircularProgress } from "@mui/material";

import { useCryptoContext } from "../../../contexts/CryptoProvider";
import { useStateContext } from "../../../contexts/ContextProvider";
import { useComponentsContext } from "../../../contexts/ComponentsProvider";

export default function StickyHeadTable() {
  const { TableHeadCell, SearchBar, TableStylePagination } =
    useComponentsContext();
  const { currentColor, page, rowsPerPage } = useStateContext();
  const {
    crypto,
    fetchCrypto,
    setCrypto,
    handleSearch,
    search,
    setSearch,
    handleClick,
  } = useCryptoContext();

  useEffect(() => {
    setCrypto();
    setSearch("");
    fetchCrypto();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="mt-12  md:mx-3">
      <div className="flex flex-col gap-10 flex-wrap justify-center items-center ">
        <SearchBar
          placeholder="Crypto.."
          value={search}
          setFunc={(e) => setSearch(e.target.value)}
        />
        <Paper className="w-full overflow-hidden max-w-7xl  ">
          <TableContainer className="max-h-60 scrollbar-thin ">
            <Table stickyHeader aria-label="sticky table ">
              <TableHead
                sx={{
                  "& .MuiTableCell-stickyHeader": {
                    backgroundColor: currentColor,
                  },
                }}
              >
                <TableRow>
                  <TableHeadCell text="#" />
                  <TableHeadCell text="Monnaie" />
                  <TableHeadCell text="Cours" />
                  <TableHeadCell text="24h" />
                </TableRow>
              </TableHead>
              <TableBody>
                {crypto ? (
                  handleSearch()
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((coin) => {
                      return (
                        <TableRow hover tabIndex={-1} key={coin.id}>
                          <TableCell>
                            {coin.market_data.market_cap_rank}
                          </TableCell>
                          <TableCell
                            component="th"
                            scope="row"
                            className="flex items-center"
                          >
                            <img
                              loading="lazy"
                              src={coin.image.thumb}
                              alt="Coin symbol"
                              className="mr-3 w-7"
                            />
                            <p
                              className="capitalize font-semibold cursor-pointer"
                              onClick={() => handleClick(coin.id)}
                            >
                              {coin.name}
                            </p>
                          </TableCell>
                          <TableCell>
                            ${coin.market_data.current_price.usd}
                          </TableCell>
                          <TableCell
                            sx={{
                              color:
                                `${coin.market_data.price_change_percentage_24h}` >
                                0
                                  ? "green"
                                  : "red",
                            }}
                          >
                            {coin.market_data.price_change_percentage_24h.toFixed(
                              1
                            )}
                            %
                          </TableCell>
                        </TableRow>
                      );
                    })
                ) : (
                  <tr>
                    <td>
                      <CircularProgress
                        className="m-2"
                        style={{ color: currentColor }}
                      />
                    </td>
                  </tr>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TableStylePagination rowCount={crypto} pageRow={[5, 10, 25]} />
        </Paper>
      </div>
    </div>
  );
}
