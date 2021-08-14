import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import Dropdown from "../../common/Dropdown";
import useStyles from "./style";
import { Button } from "@material-ui/core";

const EventConfiguration = ({
  data,
  onChange,
  classes: customClasses = {},
}) => {
  const classes = useStyles();

  const initialFilter = {
    class: "all",
    user: "Student",
    category: "all",
  };

  const [option, setOption] = useState(initialFilter);

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

  const classKeys = ["all", 12, 11, 10, 9, 8, 7, 6, 5, 4, 3];

  const userItems = ["Student", "Teacher"];

  const userKeys = ["Student", "Teacher"];

  const categoryItems = {
    Student: [
      "Category",
      "Competitions",
      "Workshops",
      "Courses",
      "Virtual Tours",
      "Theater Shows",
    ],
    Teacher: ["Category", "Workshops", "Courses"],
  };

  const categoryKeys = {
    Student: [
      "all",
      "competitive",
      "workshop",
      "course",
      "virtualTour",
      "theaterShow",
    ],
    Teacher: ["all", "workshop", "course"],
  };

  const classFilter = (updatedOptions, availableClasses) => {
    return (
      updatedOptions.class === "all" ||
      (updatedOptions.class >= availableClasses.from &&
        updatedOptions.class <= availableClasses.to)
    );
  };

  const userFilter = (updatedOptions, user) => {
    return user === updatedOptions.user;
  };

  const categoryFilter = (updatedOptions, category) => {
    return (
      updatedOptions.category === "all" || category === updatedOptions.category
    );
  };

  const handleFilter = (name, key) => {
    const updatedOptions =
      name === "user"
        ? { ...option, user: key, category: "all" }
        : { ...option, [name]: key };

    setOption(updatedOptions);

    onChange(
      data.filter(
        (event) =>
          classFilter(updatedOptions, event.availableClasses) &&
          userFilter(updatedOptions, event.eventFor) &&
          categoryFilter(updatedOptions, event.eventType)
      )
    );
  };

  const handleFilterReset = () => {
    setOption(initialFilter);

    onChange(
      data.filter(
        (event) =>
          classFilter(initialFilter, event.availableClasses) &&
          userFilter(initialFilter, event.eventFor) &&
          categoryFilter(initialFilter, event.eventType)
      )
    );
  };

  const getIndex = (arr, value) => {
    return arr.findIndex((val) => val === value);
  };

  const handleChange = (event) => {
    const { name, value: selectedValue } = event.target;
    let key;

    switch (name) {
      case "class":
        key = classKeys[selectedValue];
        break;

      case "user":
        key = userKeys[selectedValue];
        break;
      case "category":
        key = categoryKeys[option.user][selectedValue];
        break;
      default:
        key = classKeys[selectedValue];
    }

    handleFilter(name, key);
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      flexWrap="wrap"
      className={`${classes.root} ${customClasses.root}`}
    >
      <Dropdown
        name="class"
        value={getIndex(classKeys, option.class)}
        colored
        items={classItems}
        handleChange={handleChange}
        classes={{ select: classes.selectClass }}
      />
      <Dropdown
        name="user"
        value={getIndex(userKeys, option.user)}
        colored
        items={userItems}
        handleChange={handleChange}
        classes={{ select: classes.selectUser }}
      />
      <Dropdown
        name="category"
        value={getIndex(categoryKeys[option.user], option.category)}
        colored
        items={categoryItems[option.user]}
        handleChange={handleChange}
        classes={{ select: classes.selectCategory }}
      />
      <Button
        color="primary"
        className={classes.resetButton}
        onClick={handleFilterReset}
      >
        Reset
      </Button>
    </Box>
  );
};

export default EventConfiguration;
