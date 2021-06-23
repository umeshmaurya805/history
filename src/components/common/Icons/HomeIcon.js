import React from "react";
import icon from "../../../assets/svg/home-icon.svg";
import selectedIcon from "../../../assets/svg/home-icon-selected.svg";

const HomeIcon = ({ isSelected }) => {
  return isSelected ? (
    <img src={selectedIcon} alt="" />
  ) : (
    <img src={icon} alt="" />
  );};

export default HomeIcon;
