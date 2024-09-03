import React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";


const Sidenavbar = () => {
  return (
    <Box
      sx={{
        width: 300,
        height: "100vh",
        backgroundColor: "#212c4a",
        color: "white",
        display: "flex",
        flexDirection: "column",
        p: 2,
        position: "fixed",
      }}
    >
      {/* Navigation section */}
      <Box
        sx={{
          mb: 2,
          display: "flex",
          
        }}
      >
        <ElectricBoltIcon sx={{ fontSize: 20, mr: 1 }} />
        <h2 style={{ margin: 0, fontSize: "1.25rem" }}>instasell</h2>
      </Box>

<Box sx={{ flex: 1 }}>
        <List>
          {[
            { text: "Home", icon: <HomeIcon />, link: "/home" },
            { text: "Short Video Library", icon: <VideoLibraryIcon />, link: "/videos" },
            { text: "Manage Users", icon: <ManageAccountsIcon />, link: "/manage-users" },
            { text: "Settings", icon: <SettingsIcon />, link: "/settings" },
          ].map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                to={item.link}
                sx={{
                  width: "100%",
                  borderRadius: "5px",
                  padding: "5px 3px",
                  fontSize: "0.875rem",
                  "&:hover": {
                    backgroundColor: "#233d82",
                  },
                }}
              >
                <ListItemIcon sx={{ color: "white" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ color: "white", fontSize: "0.875rem" }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>

      

     {/* Bottom section */}
     <Box
        sx={{
          p: 2,
          borderTop: "1px solid #fff",
          display: "flex",
          flexDirection: "column",
          mt: "auto",
          color: "rgba(255, 255, 255, 0.7)",
          fontSize: "0.85rem",
        }}
      >
        <Box sx={{ mb: 5}}>
          <span style={{ display: "block" }}>Shaila Mali</span>
          <span style={{ display: "block" }}>shaila@vedartsolutions.com</span>
        </Box>
        <Box
          component="a"
          href="#"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "inherit",
            textDecoration: "none",
            mb:5,
          }}
        >
          <LogoutIcon sx={{mr: 1, fontSize: "1rem", color: "white" }} />
          <span style={{ fontSize: "0.85rem", color: "white",}}>Logout</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidenavbar;

