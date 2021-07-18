import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import SearchBar from "../../common/Searchbar";
import Dropdown from "../../common/Dropdown";
import useStyles from "./style";

const PastEventsConfiguration = ({
  competitive,
  value,
  handleChange,
  handleDownloadList,
}) => {
  const classes = useStyles();

  const [searchEventName, setSearchEventName] = useState("");

  const handleOnSearchChange = (e) => {
    setSearchEventName(e.target.value);
  };

  const categoryItems = {
    0: ["Category", "Workshops", "Courses", "Virtual Tours", "Theater Shows"],
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

  const userItems = ["Student", "Teacher"];

  const statusItems = ["Status", "Participated", "Not Participated"];

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

  const yearItems = ["Year", "2020-21", "2019-20", "2018-2019"];

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} className={classes.gridItem}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={5}
            className={classes.gridItem}
            style={{ marginBottom: 10 }}
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
              value={value.status}
              items={statusItems}
              handleChange={handleChange}
              classes={{ select: classes.status }}
            />
            <Dropdown
              name="month"
              value={value.month}
              items={monthItems}
              handleChange={handleChange}
              classes={{ select: classes.month }}
            />
            <Dropdown
              name="year"
              value={value.year}
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
              {!competitive && (
                <Dropdown
                  name="category"
                  value={value.category}
                  items={categoryItems[value.user]}
                  handleChange={handleChange}
                  classes={{ select: classes.category }}
                />
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
                className={classes.downloadButton}
                endIcon={<GetAppIcon />}
                onClick={handleDownloadList}
              >
                Download List
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PastEventsConfiguration;
