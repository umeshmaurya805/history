import React from "react";
import Box from "@material-ui/core/Box";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableFooter from "@material-ui/core/TableFooter";
import TableCell from "@material-ui/core/TableCell";
import Layout from "../../common/Layout";
import LeaderboardImage from "../../../assets/svg/leaderboard.svg";
import { Typography } from "@material-ui/core";
import useStyles, { StyledTableCell } from "./style";

const columns = [
  { id: "rank", label: "Rank", fixedWidth: 60 },
  { id: "name", label: "School Name", fixedWidth: 150 },
  { id: "city", label: "City", fixedWidth: 60 },
  { id: "points", label: "Points", fixedWidth: 60 },
  {
    id: "eventsParticipated",
    label: "Events Participated",
    fixedWidth: 60,
  },
  {
    id: "studentsParticipated",
    label: "Students Participated",
    fixedWidth: 60,
  },
];

function createData(
  rank,
  name,
  city,
  points,
  eventsParticipated,
  studentsParticipated
) {
  return { rank, name, city, points, eventsParticipated, studentsParticipated };
}

const schoolList = [
  createData(1, "ABC Public School", "Delhi", 5, 5, 20),
  createData(2, "DEF Public School", "Delhi", 5, 5, 40),
  createData(3, "ABCD Public School", "Delhi", 5, 5, 80),
  createData(4, "ABC Public School", "Delhi", 5, 5, 40),
  createData(5, "DEF Public School", "Delhi", 5, 5, 45),
  createData(6, "ABC Public School", "Delhi", 5, 5, 20),
  createData(7, "DEF Public School", "Delhi", 5, 5, 40),
  createData(8, "ABC Public School", "Delhi", 5, 5, 80),
  createData(9, "ABC Public School", "Delhi", 5, 5, 40),
  createData(10, "DEF Public School", "Delhi", 5, 5, 45),
];

const currentSchool = createData(3, "ABCD Public School", "Delhi", 5, 5, 80);

const Leaderboard = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Layout>
      <TableContainer className={classes.root}>
        <Table aria-label="leaderboard table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align="center"
                  style={{
                    width: column.fixedWidth,
                    minWidth: column.fixedWidth,
                  }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {schoolList
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((school) => {
                return (
                  <TableRow
                    selected={currentSchool.rank === school.rank}
                    key={school.rank}
                  >
                    {columns.map((column) => {
                      const value = school[column.id];
                      return (
                        <StyledTableCell
                          key={column.id}
                          align="center"
                          className={
                            column.id === "name"
                              ? classes.schoolColumn
                              : undefined
                          }
                        >
                          {value}
                        </StyledTableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            {schoolList.length > 5 && (
              <TableRow>
                <TableCell
                  className={classes.paginationCell}
                  colSpan={columns.length}
                >
                  <TablePagination
                    className={classes.tablePagination}
                    labelDisplayedRows={({ from, to, count }) =>
                      `${from} - ${to} of ${
                        count !== -1 ? count : `more than ${to}`
                      }`
                    }
                    rowsPerPageOptions={[5]}
                    component="div"
                    count={schoolList.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Typography
                  color="primary"
                  className={classes.currentSchoolLabel}
                  style={
                    schoolList.length <= 5 ? { paddingTop: 25 } : undefined
                  }
                >
                  School Position
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => {
                const value = currentSchool[column.id];
                return (
                  <StyledTableCell
                    key={column.id}
                    align="center"
                    className={
                      column.id === "name" ? classes.schoolColumn : undefined
                    }
                  >
                    {value}
                  </StyledTableCell>
                );
              })}
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
      <Box className={classes.imageBox}>
        <img className={classes.image} src={LeaderboardImage} alt="" />
      </Box>
    </Layout>
  );
};

export default Leaderboard;
