import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./style";

const Dropdown = ({ name, value, handleChange, items = [], maxItems = 10, styles={} }) => {
  const classes = useStyles();

  const iconComponent = ({ className }) => {
    return <ExpandMoreIcon className={`${className} ${classes.icon}`} />;
  };

  // moves the menu below the select input
  const menuProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
    PaperProps: {
      style: {
        maxHeight:40*maxItems,
      },
    },
  };

  return (
    <FormControl className={classes.root} style={styles.root}>
      <Select
        classes={{
          select: `${classes.select} ${styles.select}`,
        }}
        disableUnderline
        MenuProps={menuProps}
        IconComponent={iconComponent}
        name={name}
        value={value}
        onChange={handleChange}
      >
        {items.map((category, index) => {
          return (
            <MenuItem key={index} value={index}>
              {category}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
