import React from "react";
import { Box, Typography } from "@mui/material";
import h1 from "../components/h1.jpg";
import h2 from "../components/h2.jpg";

const Home = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "50px", backgroundColor: "#f9f9f9" }}>
      {/* Welcome Section */}
      <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: "20px", color: "#2e7d32" }}>
  🍃 Welcome to Agribazar🍃
      </Typography>

      {/* Centered Images */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
        <img
          src={h1}
          alt="Farm"
          style={{ width: "30%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
        />
        <img
          src={h2}
          alt="Agriculture"
          style={{ width: "30%", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0,0,0,0.2)" }}
        />
      </Box>

      {/* About Us Section */}
      <Box sx={{ marginTop: "50px", padding: "20px", backgroundColor: "lightgreen", borderRadius: "10px" }}>
        <Typography variant="h4" sx={{ marginBottom: "20px", fontWeight: "bold" }}>
          About Agribazar
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "18px", maxWidth: "800px", margin: "auto", lineHeight: "1.6" }}>
          Agribazar is not just a marketplace; it's a bridge connecting farmers with consumers. We ensure that you receive
          the freshest farm produce directly from local farms. With a seamless ordering process, secure transactions, and
          sustainable sourcing, we empower farmers and provide customers with quality agricultural products at fair prices.
          Join us in revolutionizing the agricultural economy, one harvest at a time! 🌱🚜
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
