import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import CsvDownloader from "react-csv-downloader";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import SearchBar from "../../common/Searchbar";
import Dropdown from "../../common/Dropdown";
import { useGetAcademicYearQuery } from "../../../app/api/leaderboard";
import useStyles from "./style";

const EventAnalyticsConfiguration = ({
  competitive,
  data,
  onChange,
  filename,
  generateCSVData,
}) => {
  const classes = useStyles();

  const today = new Date();
  today.setHours(0, 0, 0, 0, 0);

  const {
    data: yearList = {
      academicYears: [],
    },
  } = useGetAcademicYearQuery();

  const initialFilter = {
    class: "all",
    user: "Student",
    category: "all",
    status: "all",
    month: "all",
    year: "all",
  };

  const [option, setOption] = useState(initialFilter);

  const [searchEventName, setSearchEventName] = useState("");

  const handleOnSearchChange = (e) => {
    setSearchEventName(e.target.value);

    onChange(
      data.filter(
        (event) =>
          titleFilter(e.target.value, event.title) &&
          classFilter(
            option.class,
            event.availableClasses?.from,
            event.availableClasses?.to
          ) &&
          userFilter(option.user, event.eventFor) &&
          categoryFilter(option.category, event.eventType) &&
          statusFilter(option.status, event.eventType) &&
          monthFilter(option.month, event.eventType) &&
          yearFilter(option.year, event.eventType)
      )
    );
  };

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
      "Workshops",
      "Courses",
      "Virtual Tours",
      "Theater Shows",
    ],
    Teacher: ["Category", "Workshops", "Courses"],
  };

  const categoryKeys = {
    Student: ["all", "workshop", "course", "virtualTour", "theaterShow"],
    Teacher: ["all", "workshop", "course"],
  };

  const statusItems = ["Status", "Participated", "Not Participated"];
  const statusKeys = ["all", "participated", "notParticipated"];

  const monthItems = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const monthKeys = [
    "all",
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const yearItems = ["Year", ...yearList.academicYears];

  const yearKeys = ["all"];

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
    return updatedCategory === "all" || category === updatedCategory;
  };

  const statusFilter = (updatedStatus, status) => {
    return updatedStatus === "all" || status === updatedStatus;
  };

  const monthFilter = (updatedMonth, month) => {
    return updatedMonth === "all" || month === updatedMonth;
  };

  const yearFilter = (updatedYear, year) => {
    return updatedYear === "all" || year === updatedYear;
  };

  const titleFilter = (updatedEventTitle, title) => {
    return title
      .trim()
      .toLowerCase()
      .includes(updatedEventTitle.trim().toLowerCase());
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
          titleFilter(searchEventName, event.title) &&
          classFilter(
            updatedOptions.class,
            event.availableClasses?.from,
            event.availableClasses?.to
          ) &&
          userFilter(updatedOptions.user, event.eventFor) &&
          categoryFilter(updatedOptions.category, event.eventType) &&
          statusFilter(updatedOptions.status, event.eventType) &&
          monthFilter(updatedOptions.month, event.eventType) &&
          yearFilter(updatedOptions.year, event.eventType)
      )
    );
  };

  const handleFilterReset = () => {
    setOption(initialFilter);
    setSearchEventName("");

    onChange(
      data.filter(
        (event) =>
          classFilter(
            initialFilter.class,
            event.availableClasses?.from,
            event.availableClasses?.to
          ) &&
          userFilter(initialFilter.user, event.eventFor) &&
          categoryFilter(initialFilter.category, event.eventType) &&
          statusFilter(initialFilter.status, event.eventType) &&
          monthFilter(initialFilter.month, event.eventType) &&
          yearFilter(initialFilter.year, event.eventType)
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

      case "status":
        key = statusKeys[selectedValue];
        break;

      case "month":
        key = monthKeys[selectedValue];
        break;

      case "year":
        key = yearKeys[selectedValue];
        break;

      default:
        key = classKeys[selectedValue];
    }

    handleFilter(name, key);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.gridItem}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            className={classes.gridItem}
            style={{ marginBottom: "0.625rem" }}
          >
            <SearchBar
              placeholder="Search for the event"
              value={searchEventName}
              onChange={handleOnSearchChange}
              onCancel={() => setSearchEventName("")}
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
              name="status"
              value={getIndex(statusKeys, option.status)}
              items={statusItems}
              handleChange={handleChange}
              classes={{ select: classes.status }}
            />
            <Dropdown
              name="month"
              value={getIndex(monthKeys, option.month)}
              items={monthItems}
              handleChange={handleChange}
              classes={{ select: classes.month }}
            />
            <Dropdown
              name="year"
              value={getIndex(yearKeys, option.year)}
              items={yearItems}
              handleChange={handleChange}
              classes={{ select: classes.year }}
            />
          </Grid>
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
              {!competitive && (
                <React.Fragment>
                  <Dropdown
                    name="user"
                    value={getIndex(userKeys, option.user)}
                    items={userItems}
                    handleChange={handleChange}
                    classes={{ select: classes.user }}
                  />

                  <Dropdown
                    name="category"
                    value={getIndex(categoryKeys[option.user], option.category)}
                    items={categoryItems[option.user]}
                    handleChange={handleChange}
                    classes={{ select: classes.category }}
                  />
                </React.Fragment>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              md={7}
              className={classes.gridItem}
              style={{ justifyContent: "flex-end" }}
            >
              <Button
                color="primary"
                className={classes.resetButton}
                onClick={handleFilterReset}
              >
                Reset
              </Button>
              <CsvDownloader
                suffix
                wrapColumnChar="'"
                className={classes.csvDownloader}
                filename={filename}
                datas={generateCSVData()}
              >
                <Button
                  color="primary"
                  className={classes.downloadButton}
                  endIcon={<GetAppIcon />}
                >
                  Download List
                </Button>
              </CsvDownloader>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventAnalyticsConfiguration;
