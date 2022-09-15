import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ContactPageOutlinedIcon from "@mui/icons-material/ContactPageOutlined";
import CakeRoundedIcon from '@mui/icons-material/CakeRounded';
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="toolbarAppBar">
          <Box className="flexFullSize divIconButtonBar">
            <Box className="iconButtonBarLeft">
              <HomeIcon />
              <Typography
                variant="h5"
                sx={{ flexGrow: 1, flexDirection: "row" }}
              >
                <Link className="link" to="/react-router-1">
                  Home
                </Link>
              </Typography>
            </Box>

            <Box className="iconButtonBarLeft">
              <ContactPageOutlinedIcon />
              <Typography
                variant="h5"
                sx={{ flexGrow: 1, flexDirection: "row" }}
              >
                <Link className="link" to="/contacto"> 
                  Contacto
                </Link>
              </Typography>
            </Box>
          </Box>
          <Box className="flexFullSize iconButtonBarRight">
            <CakeRoundedIcon />
            <Button color="inherit">Happy Cake</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
