import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dropdown from "../../common/Dropdown";
import useStyles from "./style";
import ChoiceSelectButton from "../../button/ChoiceSelectButton/index";

const AnalyticsConfiguration = ({ value, handleChange}) => {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const categoryItems = ["Overall Performance", "Competitive", "Non-Competitive"];

  const userItems = ["User", "Student", "Teacher"];

  const classItems = [
    "Class",
    "Class 10",
    "Class 9",
    "Class 8",
    "Class 7",
    "Class 6",
    "Class 5",
    "Class 4",
    "Class 3",
  ];

  const academicYearItems = [
    "DD/MM/YYYY - DD/MM/YYYY",
    "2020-21",
    "2019-20",
    "2018-19",
  ];

  const pastDaysItems = ["Last 7 days", "Last 1 month"];

  const chartDateSelectorTypes = ["Yearly", "Weekly", "Monthly"];

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.gridItem}>
        <Dropdown
          name="category"
          value={value.category}
          colored
          items={categoryItems}
          handleChange={handleChange}
          styles={{ root: classes.selector, select: classes.category }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={5} className={classes.gridItem}>
            <Dropdown
              name="user"
              value={value.user}
              items={userItems}
              handleChange={handleChange}
              styles={{ root: classes.selector, select: classes.user }}
            />
            <Dropdown
              name="class"
              value={value.class}
              items={classItems}
              handleChange={handleChange}
              styles={{ root: classes.selector, select: classes.class }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            className={classes.gridItem}
            justifyContent="flex-end"
          >
            <Dropdown
              name="pastDays"
              value={value.pastDays}
              items={pastDaysItems}
              handleChange={handleChange}
              styles={{ root: classes.yearSelector, select: classes.pastDays }}
            />
            <Dropdown
              name="academicYear"
              value={value.academicYear}
              items={academicYearItems}
              handleChange={handleChange}
              styles={{ root: classes.yearSelector, select: classes.academicYear }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <ChoiceSelectButton
            values={chartDateSelectorTypes}
            selectedIndex={selectedIndex}
            onClick={setSelectedIndex}
            styles={{ root: classes.buttonContainer, button: classes.button }}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AnalyticsConfiguration;
