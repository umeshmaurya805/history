import React, { useState } from "react";
import sub from "date-fns/sub";
import format from "date-fns/format";
import Grid from "@material-ui/core/Grid";
import { intervalToDuration } from "date-fns";
import Button from "@material-ui/core/Button";
import Dropdown from "../../common/Dropdown";
import DatePicker from "../../../CustomCalendar";
import "../../../CustomCalendar/DatePicker.css";
import ChoiceSelectButton from "../../button/ChoiceSelectButton";
import useStyles from "./style";

const AnalyticsConfiguration = ({
  option,
  setOption,
  groupBy,
  setGroupBy,
  data,
  onChange,
}) => {
  const classes = useStyles();
  const [disableButtonFrom, setDisableButtonFrom] = useState(2);

  const today = new Date();
  today.setHours(0, 0, 0, 0, 0);

  const pastSeventhDay = sub(today, {
    days: 7,
  });

  const pastThirtyDay = sub(today, {
    days: 30,
  });

  const pastNinetyDay = sub(today, {
    days: 90,
  });

  const initialDayRange = {
    from: {
      year: pastThirtyDay.getFullYear(),
      month: pastThirtyDay.getMonth() + 1,
      day: pastThirtyDay.getDate(),
    },
    to: {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    },
  };

  const initialFilter = {
    class: "all",
    user: "Student",
    category: "all",
    pastDays: "thirty",
  };

  const categoryItems = {
    Student: [
      "Overall Performance",
      "Competitive Events",
      "Non-Competitive Events",
    ],
    Teacher: ["Non-Competitive Events"],
  };

  const categoryKeys = {
    Student: ["all", "competitive", "nonCompetitive"],
    Teacher: ["nonCompetitive"],
  };

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

  const pastDaysItems = [
    "Past 7 days",
    "Past 30 days",
    "Past 90 days",
    "Custom Range",
  ];

  const pastDaysKeys = ["seven", "thirty", "ninety", "custom"];

  const pastDaysFilter = (updatedPastDays, updatedDayRange, date) => {
    switch (updatedPastDays) {
      case "seven":
        return date >= pastSeventhDay && date <= today;

      case "thirty":
        return date >= pastThirtyDay && date <= today;

      case "ninety":
        return date >= pastNinetyDay && date <= today;

      case "custom":
      default:
        return (
          updatedDayRange.from &&
          updatedDayRange.to &&
          date >=
            new Date(
              updatedDayRange.from.year,
              updatedDayRange.from.month - 1,
              updatedDayRange.from.day
            ) &&
          date <=
            new Date(
              updatedDayRange.to.year,
              updatedDayRange.to.month - 1,
              updatedDayRange.to.day
            )
        );
    }
  };

  const classFilter = (updatedClass, classFrom, classTo) => {
    return (
      updatedClass === "all" ||
      (updatedClass >= classFrom && updatedClass <= classTo)
    );
  };

  const userFilter = (updatedUser, user) => {
    return user === updatedUser;
  };

  const categoryFilter = (updatedCategory, category) => {
    return (
      updatedCategory === "all" ||
      (category === "competitive" && updatedCategory === "competitive") ||
      (updatedCategory === "nonCompetitive" && category !== "competitive")
    );
  };

  const handleFilter = (name, key) => {
    const updatedOptions =
      name === "user"
        ? {
            ...option,
            user: key,
            category: key === "student" ? "all" : "nonCompetitive",
          }
        : { ...option, [name]: key };

    let updatedSelectedDayRange = selectedDayRange;

    if (name === "pastDays") {
      const to = {
        year: today.getFullYear(),
        month: today.getMonth() + 1,
        day: today.getDate(),
      };

      let from = {};

      switch (key) {
        case "seven":
          from = {
            year: pastSeventhDay.getFullYear(),
            month: pastSeventhDay.getMonth() + 1,
            day: pastSeventhDay.getDate(),
          };

          if (groupBy > 0) {
            setGroupBy(0);
          }

          setDisableButtonFrom(1);
          break;

        case "thirty":
          from = {
            year: pastThirtyDay.getFullYear(),
            month: pastThirtyDay.getMonth() + 1,
            day: pastThirtyDay.getDate(),
          };

          if (groupBy > 1) {
            setGroupBy(1);
          }

          setDisableButtonFrom(2);
          break;

        case "ninety":
          from = {
            year: pastNinetyDay.getFullYear(),
            month: pastNinetyDay.getMonth() + 1,
            day: pastNinetyDay.getDate(),
          };

          if (groupBy > 2) {
            setGroupBy(2);
          }

          setDisableButtonFrom(3);
          break;

        default:
          from = selectedDayRange.from;

          const duration = intervalToDuration({
            start: new Date(from.year, from.month - 1, from.day),
            end: new Date(to.year, to.month - 1, to.day),
          });

          if (duration.years > 0) {
            setDisableButtonFrom(4);
          } else if (duration.months > 0) {
            if (groupBy > 2) {
              setGroupBy(2);
            }

            setDisableButtonFrom(3);
          } else if (duration.days > 7) {
            if (groupBy > 1) {
              setGroupBy(1);
            }

            setDisableButtonFrom(2);
          } else {
            if (groupBy > 0) {
              setGroupBy(0);
            }

            setDisableButtonFrom(1);
          }
      }

      updatedSelectedDayRange = { from, to };

      setSelectedDayRange(updatedSelectedDayRange);
    }

    setOption(updatedOptions);

    onChange(
      data.filter(
        (event) =>
          classFilter(updatedOptions.class, event.classFrom, event.classTo) &&
          userFilter(updatedOptions.user, event.eventFor) &&
          categoryFilter(updatedOptions.category, event.eventType) &&
          pastDaysFilter(
            updatedOptions.pastDays,
            updatedSelectedDayRange,
            new Date(event.date)
          )
      )
    );
  };

  const handleFilterReset = () => {
    setOption(initialFilter);
    setSelectedDayRange(initialDayRange);
    setGroupBy(0);
    setDisableButtonFrom(2);

    onChange(
      data.filter(
        (event) =>
          classFilter(initialFilter.class, event.classFrom, event.classTo) &&
          userFilter(initialFilter.user, event.eventFor) &&
          categoryFilter(initialFilter.category, event.eventType) &&
          pastDaysFilter(
            initialFilter.pastDays,
            initialDayRange,
            new Date(event.date)
          )
      )
    );
  };

  const handleDateRangeChange = (dateRange) => {
    setSelectedDayRange(dateRange);

    const updatedOptions = { ...option, pastDays: "custom" };

    setOption(updatedOptions);

    const { from, to } = dateRange;

    if (from && to) {
      const duration = intervalToDuration({
        start: new Date(from.year, from.month - 1, from.day),
        end: new Date(to.year, to.month - 1, to.day),
      });

      if (duration.years > 0) {
        setDisableButtonFrom(4);
      } else if (duration.months > 0) {
        if (groupBy > 2) {
          setGroupBy(2);
        }

        setDisableButtonFrom(3);
      } else if (duration.days > 7) {
        if (groupBy > 1) {
          setGroupBy(1);
        }

        setDisableButtonFrom(2);
      } else {
        if (groupBy > 0) {
          setGroupBy(0);
        }

        setDisableButtonFrom(1);
      }
    }

    onChange(
      data.filter(
        (event) =>
          classFilter(updatedOptions.class, event.classFrom, event.classTo) &&
          userFilter(updatedOptions.user, event.eventFor) &&
          categoryFilter(updatedOptions.category, event.eventType) &&
          dateRange.from &&
          dateRange.to &&
          new Date(event.date) >=
            new Date(
              dateRange.from.year,
              dateRange.from.month - 1,
              dateRange.from.day
            ) &&
          new Date(event.date) <=
            new Date(
              dateRange.to.year,
              dateRange.to.month - 1,
              dateRange.to.day
            )
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

      case "pastDays":
        key = pastDaysKeys[selectedValue];
        break;

      default:
        key = classKeys[selectedValue];
    }

    handleFilter(name, key);
  };

  const chartDateSelectorTypes = ["Daily", "Weekly", "Monthly", "Yearly"];

  const [selectedDayRange, setSelectedDayRange] = useState(initialDayRange);

  // render regular HTML input element
  const renderCustomInput = ({ ref }) => (
    <input
      readOnly
      ref={ref} // necessary
      placeholder="Please select a range"
      value={
        selectedDayRange.from && selectedDayRange.to
          ? `${format(
              new Date(
                selectedDayRange.from.year,
                selectedDayRange.from.month - 1,
                selectedDayRange.from.day
              ),
              "PP"
            )} - ${format(
              new Date(
                selectedDayRange.to.year,
                selectedDayRange.to.month - 1,
                selectedDayRange.to.day
              ),
              "PP"
            )}`
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
          value={getIndex(categoryKeys[option.user], option.category)}
          colored
          items={categoryItems[option.user]}
          handleChange={handleChange}
          classes={{ select: classes.category }}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={5} className={classes.gridItem}>
            <Dropdown
              name="class"
              value={getIndex(classKeys, option.class)}
              items={classItems}
              handleChange={handleChange}
              classes={{ select: classes.class }}
            />
            <Dropdown
              name="user"
              value={getIndex(userKeys, option.user)}
              items={userItems}
              handleChange={handleChange}
              classes={{ select: classes.user }}
            />
            <Button
              color="primary"
              className={classes.resetButton}
              onClick={handleFilterReset}
            >
              Reset
            </Button>
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
              value={getIndex(pastDaysKeys, option.pastDays)}
              items={pastDaysItems}
              handleChange={handleChange}
              classes={{ root: classes.yearSelector, select: classes.pastDays }}
            />
            <DatePicker
              wrapperClassName={classes.datePicker}
              value={selectedDayRange}
              onChange={handleDateRangeChange}
              renderInput={renderCustomInput} // render a custom input
              colorPrimary="#007AFF"
              colorPrimaryLight="#D5EFFF"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ChoiceSelectButton
          values={chartDateSelectorTypes}
          disableFrom={disableButtonFrom}
          selectedIndex={groupBy}
          onClick={setGroupBy}
          classes={{ root: classes.buttonContainer, button: classes.button }}
        />
      </Grid>
    </Grid>
  );
};

export default AnalyticsConfiguration;
