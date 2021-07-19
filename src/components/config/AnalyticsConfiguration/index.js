import React, { useState } from "react";
import DatePicker from "@hassanmojab/react-modern-calendar-datepicker";
import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import Grid from "@material-ui/core/Grid";
import Dropdown from "../../common/Dropdown";
import useStyles from "./style";
import ChoiceSelectButton from "../../button/ChoiceSelectButton/index";

const AnalyticsConfiguration = ({ value, handleChange }) => {
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState(0);

  const categoryItems = [
    "Overall Performance",
    "Competitive",
    "Non-Competitive",
  ];

  const userItems = ["Student", "Teacher"];

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

  // const academicYearItems = [
  //   "DD/MM/YYYY - DD/MM/YYYY",
  //   "2020-21",
  //   "2019-20",
  //   "2018-19",
  // ];

  const pastDaysItems = [
    "Last 7 days",
    "Last 30 days",
    "Last 90 days",
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
          value={value.category}
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
              value={value.class}
              items={classItems}
              handleChange={handleChange}
              classes={{ select: classes.class }}
            />
            <Dropdown
              name="user"
              value={value.user}
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
              value={value.pastDays}
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
              value={value.academicYear}
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
