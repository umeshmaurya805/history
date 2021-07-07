import React, { useEffect, useRef, useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import InfoButton from "../../button/InfoButton";
import useStyles, {
  StyledTableCell,
  StyledTableBody,
  useCustomTableStyles,
} from "./style";
import Title from "../Title";
import ParticipantList from "./../../dialog/ParticipantList/index";

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
    tooltipText: "Number of registrations done from your school until now",
  },
  {
    id: "list",
    label: "List",
    fixedWidth: 150,
    tooltipText: "List of participants registered in the event",
  },
];

function createData(slug, title, date, classes, registrations, list) {
  return { slug, title, date, classes, registrations, list };
}

const upcomingEventList = [
  createData(
    "World-of-Theatre",
    "World of Theatre",
    "11/20/20",
    "5 - 9",
    15,
    6
  ),
  createData(
    "Colors-Around-Painting-Competition",
    "Colors Around Painting Competition",
    "10/15/20",
    "2 - 5",
    23,
    5
  ),
  createData(
    "Trade-to-Territory",
    "Trade to Territory",
    "10/10/20",
    "6 - 12",
    234,
    5
  ),
  createData(
    "Theatre-in-Education",
    "Theatre in Education",
    "9/27/20",
    "1 - 5",
    5,
    5
  ),
  createData("World-of-Theatre", "World of Theatre", "9/25/20", "5 - 9", 15, 5),
  createData(
    "World-of-Theatre",
    "World of Theatre",
    "11/20/20",
    "5 - 9",
    15,
    6
  ),
  createData(
    "Colors-Around-Painting-Competition",
    "Colors Around Painting Competition",
    "10/15/20",
    "2 - 5",
    23,
    5
  ),
  createData(
    "Trade-to-Territory",
    "Trade to Territory",
    "10/10/20",
    "6 - 12",
    234,
    5
  ),
  createData(
    "Theatre-in-Education",
    "Theatre in Education",
    "9/27/20",
    "1 - 5",
    5,
    5
  ),
  createData("World-of-Theatre", "World of Theatre", "9/25/20", "5 - 9", 15, 5),
];

const UpcomingEvent = () => {
  const classes = useStyles();
  const customTableStyle = useCustomTableStyles();
  const eventsTableRef = useRef(null);
  const [tableHeight, setTableHeight] = useState(0);

  useEffect(() => {
    setTableHeight(eventsTableRef.current?.clientHeight);
  }, [setTableHeight]);

  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState(null);

  const handleClickOpen = (slug) => {
    setSlug(slug);
    setOpen(true);
  };

  const handleClose = () => {
    setSlug(null);
    setOpen(false);
  };

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

  return (
    <div className={classes.root}>
      <Box>
        <Grid container justify="space-between">
          <Grid item>
            <Title tooltipText="List of upcoming events that are open now">
              Upcoming Events
            </Title>
          </Grid>
          <Grid item className={classes.selectorGrid}>
            <Box
              display="flex"
              justifyContent="flex-end"
              flexWrap="wrap"
              className={classes.selectorBox}
            >
              <FormControl className={classes.selector}>
                <Select
                  classes={{
                    select: `${classes.select} ${classes.selectClass}`,
                  }}
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
                  classes={{
                    select: `${classes.select} ${classes.selectUser}`,
                  }}
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
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <TableContainer className={classes.container}>
          <Table
            ref={eventsTableRef}
            classes={{ root: customTableStyle.root }}
            aria-label="upcoming events table"
          >
            <TableHead classes={{ root: customTableStyle.root }}>
              <TableRow classes={{ root: customTableStyle.root }}>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.id === "title" ? "left" : "center"}
                    style={{
                      width: column.fixedWidth,
                      minWidth: column.fixedWidth,
                      paddingRight:
                        column.id === "list" && tableHeight > 315
                          ? 40
                          : undefined,
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
            <StyledTableBody>
              {upcomingEventList.map((school, index) => {
                return (
                  <TableRow
                    classes={{ root: customTableStyle.root }}
                    key={index}
                  >
                    {columns.map((column) => {
                      const value = school[column.id];
                      return (
                        <StyledTableCell
                          key={column.id}
                          align={column.id === "title" ? "left" : "center"}
                          style={{
                            width: column.fixedWidth,
                            minWidth: column.fixedWidth,
                          }}
                          className={
                            column.id === "title"
                              ? classes.titleColumn
                              : undefined
                          }
                        >
                          {column.id === "list" ? (
                            <Button
                              onClick={() => handleClickOpen(school.slug)}
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
            </StyledTableBody>
          </Table>
        </TableContainer>
      </Box>
      <ParticipantList slug={slug} open={open} onClose={handleClose} />
    </div>
  );
};

export default UpcomingEvent;
