import React from "react";
import styled from "styled-components";
import {
  getDrawerSidebar,
  getSidebarContent,
  getContent,
  getHeader,
  getSidebarTrigger,
} from "@mui-treasury/layout";
import Toolbar from "@material-ui/core/Toolbar";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Home from "./Home";
import { HeaderMockUp } from "@mui-treasury/mockup/layout";
import useStyles from "./style";
import NavSidebar from "./NavSidebar";
import MyAccount from "./MyAccount";
import Calendar from "./Calendar";
import Analytics from "./Analytics";
import Leaderboard from "./Leaderboard";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const Content = getContent(styled);

const Dashboard = () => {
  const styles = useStyles();
  const { path } = useRouteMatch();

  return (
    <React.Fragment>
      <Header className={styles.header}>
        <Toolbar>
          <SidebarTrigger sidebarId={"primarySidebar"} />
          <HeaderMockUp />
        </Toolbar>
      </Header>
      <DrawerSidebar
        sidebarId={"primarySidebar"}
        PaperProps={{ className: styles.sidebar }}
      >
        <SidebarContent>
          <NavSidebar />
        </SidebarContent>
      </DrawerSidebar>
      <Content className={styles.content}>
        <Switch>
          <Route exact path={`${path}/home`} component={Home} />
          <Route exact path={`${path}/calendar`} component={Calendar} />
          <Route exact path={`${path}/analytics`} component={Analytics} />
          <Route exact path={`${path}/leaderboard`} component={Leaderboard} />
          <Route exact path={`${path}/my-account`} component={MyAccount} />
          <Redirect to={`${path}/home`} />
        </Switch>
      </Content>
    </React.Fragment>
  );
};

export default Dashboard;
