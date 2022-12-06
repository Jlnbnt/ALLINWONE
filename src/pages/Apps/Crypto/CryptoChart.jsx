import { useEffect, useState } from "react";
import axios from "axios";

import { Line } from "react-chartjs-2";

import Stack from "@mui/material/Stack";
import { CircularProgress } from "@mui/material";

import { useStateContext } from "../../../contexts/ContextProvider";

export default function CryptoChart({ coin }) {
  const { currentColor } = useStateContext();
  const [chartData, setChartData] = useState();
  const [days, setDays] = useState(1);

  const fetchChartData = async () => {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=${days}`
    );
    const data = await response.data;
    setChartData(data.prices);
  };

  useEffect(() => {
    fetchChartData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <div className="App mx-6" style={{ height: 450, margin: "30px auto" }}>
      {chartData ? (
        <>
          <Line
            data={{
              labels: chartData.map((coin) => {
                let date = new Date(coin[0]);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                    : `${date.getHours()}:${date.getMinutes()} AM`;
                return days === 1 ? time : date.toLocaleDateString();
              }),
              datasets: [
                {
                  data: chartData.map((coin) => coin[1]),

                  label:
                    days === 365
                      ? `Prix ( Année dernière )`
                      : days === 30
                      ? `Prix ( Mois dernier)`
                      : days === 7
                      ? `Prix ( Semaine dernière)`
                      : `Prix ( Jour précédent)`,
                  backgroundColor: "transparent",
                  borderColor: currentColor,
                },
              ],
            }}
            options={{
              color: currentColor,
              maintainAspectRatio: false,
              onHover: (e, chartElement) => {
                e.native.target.style.cursor =
                  chartElement.length === 1 ? "pointer" : "default";
              },
              responsive: true,
              elements: {
                point: {
                  radius: 1,
                },
              },
              scales: {
                y: {
                  ticks: {
                    color: currentColor,
                  },
                },
                x: {
                  ticks: {
                    color: currentColor,
                  },
                },
              },
            }}
          />
          <Stack
            spacing={2}
            direction="row"
            display="flex"
            justifyContent="center"
            className="mt-2"
          >
            <button
              className="text-white font-bold p-2 rounded"
              style={{ background: currentColor }}
              onClick={() => setDays(1)}
            >
              Jour
            </button>
            <button
              className="text-white font-bold p-2 rounded"
              style={{ background: currentColor }}
              onClick={() => setDays(7)}
            >
              Semaine
            </button>
            <button
              className="text-white font-bold p-2 rounded"
              style={{ background: currentColor }}
              onClick={() => setDays(30)}
            >
              Mois
            </button>
            <button
              className="text-white font-bold p-2 rounded"
              style={{ background: currentColor }}
              onClick={() => setDays(365)}
            >
              Année
            </button>
          </Stack>
        </>
      ) : (
        <span>
          <CircularProgress className="m-2" style={{ color: currentColor }} />
        </span>
      )}
    </div>
  );
}
