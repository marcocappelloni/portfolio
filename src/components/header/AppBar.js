import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import menu from "../data/menu-elements";
// import { useTheme } from "@mui/material/styles";
import Logo from "../styled/Logo.styled";
import StyledLink from "../styled/Link.styled";
import AppBarMenu from "./AppBarMenu";
// import { Link } from "react-scroll";

export default function ResponsiveAppBar() {
  // const theme = useTheme();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Logo variant="h2" visible="md" />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <AppBarMenu anchorEl={anchorElNav} handleClose={handleCloseNavMenu} />
          </Box>
          <Logo variant="h3" visible="xs" />
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, justifyContent: "end" }}>
            {menu.map((item) => (
              <StyledLink key={item.id} onClick={handleCloseNavMenu} to={item.link}>
                {item.text}
              </StyledLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
