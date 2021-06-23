import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Box from "@material-ui/core/Box";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import Button from "@material-ui/core/Button";
import HDLogo from "../../../assets/images/hd-logo.png";
import useStyles from "./style";
import HomeIcon from "../../../assets/svg/home-icon.svg";
import HomeIconSelected from "../../../assets/svg/home-icon-selected.svg";
import CalendarIcon from "../../../assets/svg/calendar-icon.svg";
import CalendarIconSelected from "../../../assets/svg/calendar-icon-selected.svg";
import AnalyticsIcon from "../../../assets/svg/analytics-icon.svg";
import AnalyticsIconSelected from "../../../assets/svg/analytics-icon-selected.svg";
import LeaderboardIcon from "../../../assets/svg/leaderboard-icon.svg";
import LeaderboardIconSelected from "../../../assets/svg/leaderboard-icon-selected.svg";
import MyAccountIcon from "../../../assets/svg/my-account-icon.svg";
import MyAccountIconSelected from "../../../assets/svg/my-account-icon-selected.svg";
import LogoutIcon from "../../../assets/svg/logout-icon.svg";
import { useLogoutMutation } from "../../../app/services/hd/auth";
import protectedHandler from "../../../utils/protectedHandler";
import { removeSchoolAuth } from "../../../utils/schoolAuth";

const NavList = () => {
  const { url: parentUrl } = useRouteMatch();
  const classes = useStyles();

  const list = [
    {
      text: "Home",
      Icon: HomeIcon,
      SelectedIcon: HomeIconSelected,
      url: "/dashboard/home",
    },
    {
      text: "Calendar",
      Icon: CalendarIcon,
      SelectedIcon: CalendarIconSelected,
      url: "/dashboard/calendar",
    },
    {
      text: "Analytics",
      Icon: AnalyticsIcon,
      SelectedIcon: AnalyticsIconSelected,
      url: "/dashboard/analytics",
    },
    {
      text: "Leaderboard",
      Icon: LeaderboardIcon,
      SelectedIcon: LeaderboardIconSelected,
      url: "/dashboard/leaderboard",
    },
    {
      text: "My Account",
      Icon: MyAccountIcon,
      SelectedIcon: MyAccountIconSelected,
      url: "/dashboard/my-account",
    },
  ];

  return list.map(({ text, SelectedIcon, Icon, url }, index) => {
    return (
      <Link to={url} key={index} className={classes.link}>
        <ListItem
          className={classes.listItem}
          classes={{ selected: classes.selected }}
          button
          selected={parentUrl === url}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <img
              className={
                url === "/dashboard/analytics" &&
                (parentUrl === url
                  ? classes.analyticsSelected
                  : classes.analytics)
              }
              src={parentUrl === url ? SelectedIcon : Icon}
              alt=""
            />
          </ListItemIcon>
          <ListItemText className={classes.listItemText} primary={text} />
        </ListItem>
      </Link>
    );
  });
};

const NavSidebar = () => {
  const classes = useStyles();
  const [logout] = useLogoutMutation();
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
        aria-label="main mailbox folders"
      >
        <NavList />
      </List>
      <Button
        className={classes.logoutButton}
        startIcon={<img src={LogoutIcon} alt="" />}
        onClick={logoutSchool}
      >
        Log Out
      </Button>
    </div>
  );
};

export default NavSidebar;
