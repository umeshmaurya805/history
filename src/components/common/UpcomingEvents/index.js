import React, { useEffect, useRef, useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import InfoButton from "../button/InfoButton";
import useStyles, { StyledTableCell } from "./style";

const columns = [
  {
    id: "title",
    label: "Title",
    fixedWidth: 180,
    tooltipText: "Upcoming event names",
  },
  {
    id: "date",
    label: "Date",
    fixedWidth: 150,
    tooltipText: "Starting date of the event",
  },
  {
    id: "classes",
    label: "Classes",
    fixedWidth: 150,
    tooltipText: "Range of classes which can participate in the event",
  },
  {
    id: "registrations",
    label: "Registrations",
    fixedWidth: 150,
    tooltipText:
      "Number of registrations done for a particular event until now",
  },
  {
    id: "list",
    label: "List",
    fixedWidth: 150,
    tooltipText: "List of participants registered in the event",
  },
];

function createData(title, date, classes, registrations, list) {
  return { title, date, classes, registrations, list };
}

const UpcomingEventsList = [
  createData("World of Theatre", "11/20/20", "5 - 9", 15, 6),
  createData("Colors Around Painting Competition", "10/15/20", "2 - 5", 23, 5),
  createData("Trade to Territory", "10/10/20", "6 - 12", 234, 5),
  createData("Theatre in Education", "9/27/20", "1 - 5", 5, 5),
  createData("World of Theatre", "9/25/20", "5 - 9", 15, 5),
  createData("World of Theatre", "11/20/20", "5 - 9", 15, 6),
  createData("Colors Around Painting Competition", "10/15/20", "2 - 5", 23, 5),
  createData("Trade to Territory", "10/10/20", "6 - 12", 234, 5),
  createData("Theatre in Education", "9/27/20", "1 - 5", 5, 5),
  createData("World of Theatre", "9/25/20", "5 - 9", 15, 5),
];

const UpcomingEvents = () => {
  const classes = useStyles();
  const eventsTableRef = useRef(null);
  const [tableHeight, setTableHeight] = useState(0);

  useEffect(() => {
    setTableHeight(eventsTableRef.current?.clientHeight);
  }, [setTableHeight]);

  const [option, setOption] = useState({ class: -1, user: -1, category: -1 });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOption({ ...option, [name]: value });
  };

  const iconComponent = (props) => {
    return <ExpandMoreIcon className={`${props.className} ${classes.icon}`} />;
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
  };

  const TableHeader = (props) => {
    return (
      <TableHead {...props}>
        <TableRow>
          {columns.map((column) => (
            <StyledTableCell
              key={column.id}
              align={column.id === "title" ? "start" : "center"}
              style={{
                width: column.fixedWidth,
                minWidth: column.fixedWidth,
                paddingRight:
                  column.id === "list" && tableHeight > 320 ? 40 : undefined,
              }}
            >
              {column.label}
              <InfoButton
                fill="white"
                position="top"
                text={column.tooltipText}
              />
            </StyledTableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  return (
    <div className={classes.root}>
      <Box>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title}>
              Upcoming Events
              <InfoButton
                position="right-end"
                text="List of upcoming events that are open now"
              />
            </Typography>
          </Grid>
          <Grid item className={classes.selectorGrid}>
            <FormControl className={classes.selector}>
              <Select
                classes={{ select: `${classes.select} ${classes.selectClass}` }}
                disableUnderline
                MenuProps={menuProps}
                IconComponent={iconComponent}
                name="class"
                value={option.class}
                onChange={handleChange}
              >
                <MenuItem value={-1}>Class</MenuItem>
                {[10, 9, 8, 7, 6, 5, 4, 3].map((currentClass, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      Class {currentClass}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl className={classes.selector}>
              <Select
                classes={{ select: `${classes.select} ${classes.selectUser}` }}
                disableUnderline
                MenuProps={menuProps}
                IconComponent={iconComponent}
                name="user"
                value={option.user}
                onChange={handleChange}
              >
                <MenuItem value={-1}>User</MenuItem>
                {["Student", "Teacher"].map((category, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
            <FormControl className={classes.selector}>
              <Select
                classes={{
                  select: `${classes.select} ${classes.selectCategory}`,
                }}
                disableUnderline
                MenuProps={menuProps}
                IconComponent={iconComponent}
                name="category"
                value={option.category}
                onChange={handleChange}
              >
                <MenuItem value={-1}>Category</MenuItem>
                {[
                  "Competitive",
                  "Workshops",
                  "Courses",
                  "Virtual Tours",
                  "Theater Shows",
                ].map((category, index) => {
                  return (
                    <MenuItem key={index} value={index}>
                      {category}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <TableContainer className={classes.tableHeadContainer}>
          <Table
            className={classes.table}
            stickyHeader
            aria-label="upcoming events table"
          >
            <TableHeader />
          </Table>
        </TableContainer>
        <TableContainer className={classes.container}>
          <Table
            ref={eventsTableRef}
            className={classes.table}
            stickyHeader
            aria-label="upcoming events table"
          >
            <TableHeader className={classes.invisibleHeader} />
            <TableBody>
              {UpcomingEventsList.map((school, index) => {
                return (
                  <TableRow key={index}>
                    {columns.map((column) => {
                      const value = school[column.id];
                      return (
                        <StyledTableCell
                          key={column.id}
                          align={column.id === "title" ? "start" : "center"}
                          className={
                            column.id === "title"
                              ? classes.titleColumn
                              : undefined
                          }
                        >
                          {column.id === "list" ? (
                            <Button
                              onClick={() => {}}
                              color="primary"
                              className={classes.viewButton}
                            >
                              View
                            </Button>
                          ) : (
                            value
                          )}
                        </StyledTableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
};

export default UpcomingEvents;
