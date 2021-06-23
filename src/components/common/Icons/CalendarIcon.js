import React from "react";
import icon from "../../../assets/svg/calendar-icon.svg";
import selectedIcon from "../../../assets/svg/calendar-icon-selected.svg";

const CalendarIcon = ({ isSelected }) => {
  return <img src={isSelected ? selectedIcon : icon} alt="" />;
};

export default CalendarIcon;
