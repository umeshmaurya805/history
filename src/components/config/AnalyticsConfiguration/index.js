import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Dropdown from "../../common/Dropdown";
import DatePicker from "../../../CustomCalendar";
import "../../../CustomCalendar/DatePicker.css";
import ChoiceSelectButton from "../../button/ChoiceSelectButton";
import useStyles from "./style";

const AnalyticsConfiguration = ({ data, onChange }) => {
  const classes = useStyles();

  const initialFilter = {
    class: "all",
    user: "Student",
    category: "all",
  };

  const [option, setOption] = useState(initialFilter);

  const [selectedIndex, setSelectedIndex] = useState(0);

  const categoryItems = [
    "Overall Performance",
    "Competitive Events",
    "Non-Competitive Events",
  ];

  const categoryKeys = ["all", "competitive", "nonCompetitive"];

  const userItems = ["Student", "Teacher"];
  const userKeys = ["Student", "Teacher"];

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

  // const academicYearItems = [
  //   "DD/MM/YYYY - DD/MM/YYYY",
  //   "2020-21",
  //   "2019-20",
  //   "2018-19",
  // ];

  const pastDaysItems = [
    "Past 7 days",
    "Past 30 days",
    "Past 90 days",
    "Custom Range",
  ];

  const chartDateSelectorTypes = ["Weekly", "Monthly", "Yearly"];

  const [selectedDayRange, setSelectedDayRange] = useState({
    from: "",
    to: "",
  });

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="DD/MM/YYYY - DD/MM/YYYY"
      value={
        selectedDayRange.from && selectedDayRange.to
          ? `${selectedDayRange.from.day}/${selectedDayRange.from.month}/${selectedDayRange.from.year} - ${selectedDayRange.to.day}/${selectedDayRange.to.month}/${selectedDayRange.to.year}`
          : ""
      }
      className={classes.datePickerInput}
    />
  );

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.gridItem}>
        <Dropdown
          name="category"
          value={option.category}
          colored
          items={categoryItems}
          handleChange={handleChange}
          classes={{ select: classes.category }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={5} className={classes.gridItem}>
            <Dropdown
              name="class"
              value={option.class}
              items={classItems}
              handleChange={handleChange}
              classes={{ select: classes.class }}
            />
            <Dropdown
              name="user"
              value={option.user}
              items={userItems}
              handleChange={handleChange}
              classes={{ select: classes.user }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={7}
            className={classes.gridItem}
            style={{ justifyContent: "flex-end" }}
          >
            <Dropdown
              name="pastDays"
              value={option.pastDays}
              items={pastDaysItems}
              handleChange={handleChange}
              classes={{ root: classes.yearSelector, select: classes.pastDays }}
            />
            <DatePicker
              wrapperClassName={classes.datePicker}
              value={selectedDayRange}
              onChange={setSelectedDayRange}
              renderInput={renderCustomInput} // render a custom input
              colorPrimary="#007AFF"
              colorPrimaryLight="#D5EFFF"
            />
            {/* <Dropdown
              name="academicYear"
              value={option.academicYear}
              items={academicYearItems}
              handleChange={handleChange}
              classes={{
                root: classes.yearSelector,
                select: classes.academicYear,
              }}
            /> */}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ChoiceSelectButton
          values={chartDateSelectorTypes}
          selectedIndex={selectedIndex}
          onClick={setSelectedIndex}
          classes={{ root: classes.buttonContainer, button: classes.button }}
        />
      </Grid>
    </Grid>
  );
};

export default AnalyticsConfiguration;
