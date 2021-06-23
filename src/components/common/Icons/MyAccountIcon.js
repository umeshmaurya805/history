import React from "react";
import icon from "../../../assets/svg/my-account-icon.svg";
import selectedIcon from "../../../assets/svg/my-account-icon-selected.svg";

const MyAccountIcon = ({ isSelected }) => {
  return isSelected ? (
    <img src={selectedIcon} alt="" />
  ) : (
    <img src={icon} alt="" />
  );
};

export default MyAccountIcon;
