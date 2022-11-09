import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";

function Navbar() {
  return (
    <div className="navebartop">
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <nav className="navbar">
                <div className="links">
                  <Link
                    to="/"
                    style={{
                      color: "black",
                      backgroundColor: " #0099cc",
                      padding: "10px",
                      borderRadius: "8px",
                      marginLeft: "12px",
                      textDecoration: "none",
                    }}
                  >
                    FORM
                  </Link>
                  <Link
                    to="/formcontrol"
                    style={{
                      color: "black",
                      backgroundColor: " #0099cc",
                      padding: "10px",
                      borderRadius: "8px",
                      marginLeft: "12px",
                      textDecoration: "none",
                    }}
                  >
                    FORM WITH COMPONENT
                  </Link>

                  <Link
                    to="/login"
                    style={{
                      color: "black",
                      backgroundColor: " #0099cc",
                      padding: "10px",
                      borderRadius: "8px",
                      marginLeft: "12px",
                      textDecoration: "none",
                    }}
                  >
                    LOGIN
                  </Link>

                  
                </div>
              </nav>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Navbar;
