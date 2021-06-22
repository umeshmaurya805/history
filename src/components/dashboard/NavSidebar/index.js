import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { useHistory, useRouteMatch } from "react-router-dom";
import HDLogo from "../../../assets/images/hd-logo.png";
import HomeIcon from "../../../assets/svg/home-icon.svg";
import CalendarIcon from "../../../assets/svg/calendar-icon.svg";
import AnalyticsIcon from "../../../assets/svg/analytics-icon.svg";
import LeaderboardIcon from "../../../assets/svg/leaderboard-icon.svg";
import MyAccountIcon from "../../../assets/svg/my-account-icon.svg";
import useStyles from "./style";

const NavList = () => {
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { url: parentUrl } = useRouteMatch();

  const handleItemClick = (relativeUrl, index) => {
    history.push(`${parentUrl}/${relativeUrl}`);
    setSelectedIndex(index);
  };

  const list = [
    {
      text: "Home",
      icon: HomeIcon,
      relativeUrl: "home",
    },
    {
      text: "Calendar",
      icon: CalendarIcon,
      relativeUrl: "calendar",
    },
    {
      text: "Analytics",
      icon: AnalyticsIcon,
      relativeUrl: "analytics",
    },
    {
      text: "Leaderboard",
      icon: LeaderboardIcon,
      relativeUrl: "leaderboard",
    },
    {
      text: "My Account",
      icon: MyAccountIcon,
      relativeUrl: "my-account",
    },
  ];

  return list.map(({ text, icon, relativeUrl }, index) => {
    return (
      <ListItem
        key={index}
        button
        selected={selectedIndex === index}
        onClick={() => handleItemClick(relativeUrl, index)}
      >
        <ListItemIcon>
          <img src={icon} alt="" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    );
  });
};

const NavSidebar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img className={classes.logo} src={HDLogo} alt="History Diaries Logo" />
      <List
        className={classes.navList}
        component="nav"
        aria-label="main mailbox folders"
      >
        <NavList />
      </List>
    </div>
  );
};

export default NavSidebar;
