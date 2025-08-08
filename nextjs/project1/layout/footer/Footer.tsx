"use client";

import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 2,
        textAlign: "center",
        mt: "auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Typography variant="body2" color="textSecondary">
        © {new Date().getFullYear()} | Made by ZEESHAN KHAN
      </Typography>
    </Box>
  );
};

export default Footer;
