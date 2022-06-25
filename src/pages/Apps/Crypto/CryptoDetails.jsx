import React from "react";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { HiChevronLeft } from "react-icons/hi";
import CryptoChart from "./CryptoChart";
import CryptoDataCard from "./CryptoDataCard";
import { Grid } from "@mui/material";

import { useStateContext } from "../../../contexts/ContextProvider";
import { useCryptoContext } from "../../../contexts/CryptoProvider";

const CryptoDetails = () => {
  const { currentColor } = useStateContext();
  const { crypto } = useCryptoContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!crypto) {
      navigate("/crypto");
    }
  }, []);

  return (
    <>
      {crypto && (
        <div className="mt-5 ">
          <Grid container spacing={2} className="md:p-12">
            <Grid item xs={12} md={12} lg={12}>
              <HiChevronLeft
                onClick={() => {
                  navigate(-1);
                }}
                style={{
                  fontSize: "30px",
                  cursor: "pointer",
                  color: currentColor,
                }}
              />
            </Grid>
            <Grid item xs={12} md={7} lg={8} className="mb-4">
              {crypto &&
                crypto.map((coin) => <CryptoChart coin={coin} key={coin.id} />)}
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
              {crypto &&
                crypto.map((coin) => (
                  <CryptoDataCard coin={coin} key={coin.id} />
                ))}
            </Grid>
          </Grid>
        </div>
      )}
    </>
  );
};

export default CryptoDetails;
