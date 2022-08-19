import * as React from "react";
import { Button, Typography } from "@mui/material";
import CoverLayout from "../components/CoverLayout";
import { useNavigate } from "react-router-dom";

const backgroundImage =
  "https://images.unsplash.com/photo-1626705343685-eb1e06c9271f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80";

export default function CoverPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("home button clicked");
    navigate("/home");
    window.location.reload();
  };

  return (
    <CoverLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        De-Vote
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 3, sm: 7 } }}
      >
        A decentralized voting system that is built on the Ethereum blockchain.
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        sx={{ minWidth: 200 }}
        onClick={handleClick}
      >
        <b>Click Here To Vote</b>
      </Button>
    </CoverLayout>
  );
}
