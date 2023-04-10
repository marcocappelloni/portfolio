import React from "react";
import Menu from "@mui/material/Menu";
import menu from "../data/menu-elements";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

function AppBarMenu(props) {
  return (
    <Menu
      id="menu-appbar"
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      open={Boolean(props.anchorEl)}
      onClose={props.handleClose}
      sx={{
        display: { xs: "block", md: "none" }
      }}
    >
      {menu.map((item) => (
        <MenuItem href={item.link} key={item.id} onClick={props.handleClose}>
          <Typography textAlign="center">{item.text}</Typography>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default AppBarMenu;
