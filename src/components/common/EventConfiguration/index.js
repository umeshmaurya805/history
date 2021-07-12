import React from "react";
import Box from "@material-ui/core/Box";
import Dropdown from "../Dropdown";
import useStyles from "./style";

const EventConfiguration = ({ value, handleChange, styles = {} }) => {
  const classes = useStyles();

  const classItems = ["Class", "Class 10",  "Class 9",  "Class 8",  "Class 7",  "Class 6",  "Class 5",  "Class 4",  "Class 3"];

  const userItems = ["User", "Student", "Teacher"];

  const categoryItems = {
    0: [
      "Category",
      "Competitive",
      "Workshops",
      "Courses",
      "Virtual Tours",
      "Theater Shows",
    ],
    1: [
      "Category",
      "Competitive",
      "Workshops",
      "Courses",
      "Virtual Tours",
      "Theater Shows",
    ],
    2: ["Category", "Workshops", "Courses"],
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      flexWrap="wrap"
      className={`${classes.root} ${styles.root}`}
    >
      <Dropdown
        name="class"
        value={value.class}
        colored
        items={classItems}
        handleChange={handleChange}
        styles={{ select: classes.selectClass }}
      />
      <Dropdown
        name="user"
        value={value.user}
        colored
        items={userItems}
        handleChange={handleChange}
        styles={{ select: classes.selectUser }}
      />
      <Dropdown
        name="category"
        value={value.category}
        colored
        items={categoryItems[value.user]}
        handleChange={handleChange}
        styles={{ select: classes.selectCategory }}
      />
    </Box>
  );
};

export default EventConfiguration;
