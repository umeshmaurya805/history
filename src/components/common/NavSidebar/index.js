import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import SvgIcon from "@material-ui/core/SvgIcon";
import Box from "@material-ui/core/Box";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import HDLogo from "../../../assets/images/hd-logo.png";
import AnalyticsSvg from "../../../assets/AnalyticsSvg";
import { useLogoutMutation } from "../../../app/services/hd/auth";
import protectedHandler from "../../../utils/protectedHandler";
import { removeSchoolAuth } from "../../../utils/schoolAuth";
import logoutIcon from "../../../assets/svg/logout-icon.svg";
import LoadingIconButton from "../LoadingIconButton";
import {
  calendarSvgPath,
  homeSvgPath,
  leaderboardSvgPath,
  myAccountSvgPath,
} from "../../../assets/svgPath";
import useStyles from "./style";

const NavList = () => {
  const { url: parentUrl } = useRouteMatch();
  const classes = useStyles();

  const list = [
    {
      text: "Home",
      path: homeSvgPath,
      url: "/dashboard/home",
    },
    {
      text: "Calendar",
      path: calendarSvgPath,
      url: "/dashboard/calendar",
    },
    {
      text: "Analytics",
      Svg: AnalyticsSvg,
      url: "/dashboard/analytics",
    },
    {
      text: "Leaderboard",
      path: leaderboardSvgPath,
      url: "/dashboard/leaderboard",
    },
    {
      text: "My Account",
      path: myAccountSvgPath,
      url: "/dashboard/my-account",
    },
  ];

  return list.map(({ text, Svg, path, url }, index) => {
    return (
      <Link to={url} key={index} className={classes.link}>
        <ListItem
          className={classes.listItem}
          classes={{ selected: classes.selected }}
          button
          selected={parentUrl === url}
        >
          <ListItemIcon className={classes.listItemIcon}>
            {url === "/dashboard/analytics" ? (
              <Svg fill={parentUrl === url ? "#4A90E2" : "white"} />
            ) : (
              <SvgIcon
                style={{ color: parentUrl === url ? "#4A90E2" : "white" }}
              >
                {path}
              </SvgIcon>
            )}
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary={text} />
        </ListItem>
      </Link>
    );
  });
};

const NavSidebar = () => {
  const classes = useStyles();
  const [logout, { isLoading }] = useLogoutMutation();
  const history = useHistory();

  const logoutSchool = protectedHandler(async () => {
    await logout().unwrap();
    removeSchoolAuth();
    history.push("/auth/login");
  });

  return (
    <div className={classes.root}>
      <Box className={classes.logoBox}>
        <img className={classes.logo} src={HDLogo} alt="History Diaries Logo" />
      </Box>
      <List
        className={classes.navList}
        component="nav"
        aria-label="navigation"
      >
        <NavList />
      </List>
      <LoadingIconButton
        className={classes.logoutButton}
        isLoading={isLoading}
        loaderColor="#2366B5"
        icon={<img src={logoutIcon} alt="" />}
        onClick={logoutSchool}
      >
        Log Out
      </LoadingIconButton>
    </div>
  );
};

export default NavSidebar;
