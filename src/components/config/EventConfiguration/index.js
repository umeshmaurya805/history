import React from "react";
import Box from "@material-ui/core/Box";
import Dropdown from "../../common/Dropdown";
import useStyles from "./style";

const EventConfiguration = ({
  value,
  handleChange,
  classes: customClasses = {},
}) => {
  const classes = useStyles();

  const classItems = [
    "Class",
    "Class 12",
    "Class 11",
    "Class 10",
    "Class 9",
    "Class 8",
    "Class 7",
    "Class 6",
    "Class 5",
    "Class 4",
    "Class 3",
  ];

  const userItems = ["Student", "Teacher"];

  const categoryItems = {
    0: [
      "Category",
      "Competitive",
      "Workshops",
      "Courses",
      "Virtual Tours",
      "Theater Shows",
    ],
    1: ["Category", "Workshops", "Courses"],
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      flexWrap="wrap"
      className={`${classes.root} ${customClasses.root}`}
    >
      <Dropdown
        name="class"
        value={value.class}
        colored
        items={classItems}
        handleChange={handleChange}
        classes={{ select: classes.selectClass }}
      />
      <Dropdown
        name="user"
        value={value.user}
        colored
        items={userItems}
        handleChange={handleChange}
        classes={{ select: classes.selectUser }}
      />
      <Dropdown
        name="category"
        value={value.category}
        colored
        items={categoryItems[value.user]}
        handleChange={handleChange}
        classes={{ select: classes.selectCategory }}
      />
    </Box>
  );
};

export default EventConfiguration;
