import React from "react";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import useStyles from "./style";
import { IconButton } from "@material-ui/core";

const SearchBar = ({ placeholder, value, onChange, onCancel }) => {
  const classes = useStyles();

  return (
    <InputBase
      name="searchbar"
      classes={classes}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      startAdornment={<SearchIcon />}
      endAdornment={
        value && (
          <IconButton size="small" onClick={onCancel}>
            <CloseIcon />
          </IconButton>
        )
      }
    />
  );
};

export default SearchBar;
