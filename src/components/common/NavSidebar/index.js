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
import HomeIcon from "../Icons/HomeIcon";
import CalendarIcon from "../Icons/CalendarIcon";
import AnalyticsIcon from "../Icons/AnalyticsIcon";
import LeaderboardIcon from "../Icons/LeaderboardIcon";
import MyAccountIcon from "../Icons/MyAccountIcon";
import LogoutIcon from "../Icons/LogoutIcon";
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
      url: "/dashboard/home",
    },
    {
      text: "Calendar",
      Icon: CalendarIcon,
      url: "/dashboard/calendar",
    },
    {
      text: "Analytics",
      Icon: AnalyticsIcon,
      url: "/dashboard/analytics",
    },
    {
      text: "Leaderboard",
      Icon: LeaderboardIcon,
      url: "/dashboard/leaderboard",
    },
    {
      text: "My Account",
      Icon: MyAccountIcon,
      url: "/dashboard/my-account",
    },
  ];

  return list.map(({ text, Icon, url }, index) => {
    return (
      <Link to={url} key={index} className={classes.link}>
        <ListItem
          className={classes.listItem}
          classes={{ selected: classes.selected }}
          button
          selected={parentUrl === url}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Icon isSelected={parentUrl === url} />
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
        startIcon={<LogoutIcon />}
        onClick={logoutSchool}
      >
        Log Out
      </Button>
    </div>
  );
};

export default NavSidebar;
