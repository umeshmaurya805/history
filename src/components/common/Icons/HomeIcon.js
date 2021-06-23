import React from "react";
import icon from "../../../assets/svg/home-icon.svg";
import selectedIcon from "../../../assets/svg/home-icon-selected.svg";

const HomeIcon = ({ isSelected }) => {
  return <img src={isSelected ? selectedIcon : icon} alt="" />;
};

export default HomeIcon;
