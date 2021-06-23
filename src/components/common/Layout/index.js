import React from "react";
import styled from "styled-components";
import {
  getSwipeableSidebar,
  getSidebarContent,
  getContent,
  getHeader,
  getSidebarTrigger,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import NavSidebar from "../NavSidebar";

const Header = getHeader(styled);
const SwipeableSidebar = getSwipeableSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const Content = getContent(styled);

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Header className={classes.header}>
        <Toolbar>
          <SidebarTrigger sidebarId={"primarySidebar"} />
          <Typography variant="h5" color="primary" className={classes.heading}>
            History Diaries
          </Typography>
        </Toolbar>
      </Header>
      <SwipeableSidebar
        sidebarId={"primarySidebar"}
        PaperProps={{ className: classes.sidebar }}
      >
        <SidebarContent>
          <NavSidebar />
        </SidebarContent>
      </SwipeableSidebar>
      <Content className={classes.content}>{children}</Content>
    </React.Fragment>
  );
};

export default Layout;
