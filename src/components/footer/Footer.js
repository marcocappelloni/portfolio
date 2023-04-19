// import React from "react";
// import styles from "./Footer.module.scss";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Socials from "./Socials";

const Footer = () => {
  return (
    <Box>
      <Socials />
      <Typography>© Created by Marco Cappelloni</Typography>
    </Box>
  );
};

export default Footer;
