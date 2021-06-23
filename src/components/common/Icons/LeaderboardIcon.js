import React from "react";
import icon from "../../../assets/svg/leaderboard-icon.svg";
import selectedIcon from "../../../assets/svg/leaderboard-icon-selected.svg";

const LeaderboardIcon = ({ isSelected }) => {
  return <img src={isSelected ? selectedIcon : icon} alt="" />;
};

export default LeaderboardIcon;
