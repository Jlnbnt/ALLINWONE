import React from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { useCryptoContext } from "../../../contexts/CryptoProvider";

const CryptoDataCard = ({ coin }) => {
  const { getDifDate, getDateFormat } = useCryptoContext();

  return (
    <>
      {coin && (
        <TableContainer
          component={Paper}
          className="flex max-h-450 bg-gray-200 p-4"
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: "none", fontWeight: "800" }}>
                  Statistiques du cours de {coin.symbol.toUpperCase()}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Cours de {coin.name}
                </TableCell>
                <TableCell align="right">
                  ${coin.market_data.current_price.usd}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Capitalisation boursière
                </TableCell>
                <TableCell align="right">
                  ${coin.market_data.market_cap.usd.toLocaleString("en-US")}
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Volume d'échange
                </TableCell>
                <TableCell align="right">
                  ${coin.market_data.total_volume.usd.toLocaleString("en-US")}
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Min. sur 24 h / Max. sur 24 h
                </TableCell>
                <TableCell align="right">
                  ${coin.market_data.low_24h.usd} / $
                  {coin.market_data.high_24h.usd}
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Classement
                </TableCell>
                <TableCell align="right">
                  #{coin.market_data.market_cap_rank}
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Niveau record
                </TableCell>
                <TableCell align="right">
                  <span>${coin.market_data.ath.usd} </span>
                  <span
                    style={{
                      color:
                        `${coin.market_data.ath_change_percentage.usd}` > 0
                          ? "green"
                          : "red",
                    }}
                  >
                    {coin.market_data.ath_change_percentage.usd.toFixed(1)}%
                  </span>
                  <br />
                  <p>{`${getDateFormat(
                    coin.market_data.ath_date.usd
                  )} ( ${getDifDate(
                    coin.market_data.ath_date.usd
                  ).toLocaleString()} )`}</p>
                </TableCell>
              </TableRow>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Plus bas niveau historique
                </TableCell>
                <TableCell align="right">
                  <span>${coin.market_data.atl.usd} </span>
                  <span
                    style={{
                      color:
                        `${coin.market_data.atl_change_percentage.usd}` > 0
                          ? "green"
                          : "red",
                    }}
                  >
                    {coin.market_data.atl_change_percentage.usd.toFixed(1)}%
                  </span>
                  <br />
                  <p>{`${getDateFormat(
                    coin.market_data.atl_date.usd
                  )} ( ${getDifDate(coin.market_data.atl_date.usd)} )`}</p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default CryptoDataCard;
