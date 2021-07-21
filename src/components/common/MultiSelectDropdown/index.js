import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import useStyles from "./style";

const Dropdown = ({
  name,
  value,
  handleChange,
  items = [],
  colored = false,
  maxItems = 10,
  classes: customClasses = {},
}) => {
  const classes = useStyles();

  const iconComponent = ({ className }) => {
    return (
      <ExpandMoreIcon className={`${className} ${colored && classes.icon}`} />
    );
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
        maxHeight: 40 * maxItems,
      },
    },
  };

  return (
    items &&
    items.length > 0 && (
      <FormControl className={`${classes.root} ${customClasses.root}`}>
        <Select
          classes={{
            select: `${
              colored ? classes.coloredSelect : classes.normalSelect
            } ${customClasses.select}`,
          }}
          disableUnderline
          displayEmpty
          multiple
          MenuProps={menuProps}
          IconComponent={iconComponent}
          name={name}
          value={value}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return "Class";
            }

            return selected.join(", ");
          }}
          onChange={handleChange}
        >
          {items.map((category) => {
            return (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    )
  );
};

export default Dropdown;
