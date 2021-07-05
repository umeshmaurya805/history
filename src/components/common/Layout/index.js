import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import {
  getDrawerSidebar,
  getSidebarContent,
  getContent,
  getHeader,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import NavSidebar from "../NavSidebar";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const Content = getContent(styled);

const Layout = ({ children }) => {
  const classes = useStyles();
  const [opened, setOpened] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpened(open);
  };
  return (
    <React.Fragment>
      <Header className={classes.header}>
        <Toolbar style={{ paddingLeft: 0 }}>
          <Button onClick={toggleDrawer(true)}>
            <MenuIcon />
          </Button>

          <Typography variant="h5" color="primary" className={classes.heading}>
            History Diaries
          </Typography>
        </Toolbar>
      </Header>
        <DrawerSidebar
          sidebarId={"primarySidebar"}
          PaperProps={{ className: classes.sidebar }}
        >
          <SidebarContent>
            <NavSidebar />
          </SidebarContent>
        </DrawerSidebar>
      <Hidden mdUp>
        <SwipeableDrawer
          PaperProps={{ className: classes.sidebar }}
          anchor="left"
          open={opened}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <SidebarContent>
            <NavSidebar />
          </SidebarContent>
        </SwipeableDrawer>
      </Hidden>

      <Content className={classes.content}>{children}</Content>
    </React.Fragment>
  );
};

export default Layout;
