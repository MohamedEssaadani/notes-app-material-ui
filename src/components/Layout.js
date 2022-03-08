import { AddCircleOutlineOutlined, SubjectOutlined } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { format } from "date-fns";
const drawerWidth = 240;

export default function Layout({ children }) {
  //
  const location = useLocation();
  const navigate = useNavigate();

  //
  const menuItems = [
    {
      text: "My Notes",
      icon: <SubjectOutlined color="secondary" />,
      path: "/",
    },
    {
      text: "Create Note",
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: "/create-note",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      {/*App bar*/}
      <AppBar sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>
            Today's Date is {format(new Date(), "do MMMM Y")}
          </Typography>
          <Typography>Mohamed</Typography>
          <Avatar src="/mohamed.jpg" sx={{ marginLeft: 2 }} />
        </Toolbar>
      </AppBar>
      {/*Side drawer*/}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <div>
          <Typography variant="h5" sx={{ margin: 2 }}>
            Notes List
          </Typography>
        </div>

        {/* links/list section */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              selected={location.pathname === item.path}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* display children */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          width: "100%",
          paddingTop: 6,
          paddingBottom: 6,
        }}
      >
        {/* make content under the toolbar */}
        <Toolbar></Toolbar>
        {children}
      </div>
    </div>
  );
}
