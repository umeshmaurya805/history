import React, { useState } from "react";
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
import Dropdown from "../../common/Dropdown";
import { useGetSchoolLeaderboardQuery } from "../../../app/api/leaderboard";

const columns = [
  { id: "position", label: "Position", fixedWidth: "3rem" },
  { id: "schoolName", label: "School Name", fixedWidth: "9.375rem" },
  { id: "address", label: "Address", fixedWidth: "3.75rem" },
  { id: "points", label: "Points Earned", fixedWidth: "3.75rem" },
  {
    id: "competitionParticipated",
    label: "Competitions Participated",
    fixedWidth: "3.75rem",
  },
  {
    id: "studentParticipation",
    label: "Students Participated",
    fixedWidth: "3.75rem",
  },
];

const Leaderboard = () => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const rowsPerPage = 5;

  const { data = {} } = useGetSchoolLeaderboardQuery();
  const currentYear = new Date().getFullYear();

  const {
    academicYears = [
      `Academic Year: ${currentYear}-${(currentYear + 1)
        .toString()
        .substr(-2)}`,
    ],
    schools = [
      [1].map(() => ({
        position: "-",
        schoolName: "-",
        points: "-",
        competitionParticipated: "-",
        studentParticipation: "-",
      })),
    ],
    schoolPositions = [
      {
        position: "1",
        schoolName: "-",
        points: "-",
        competitionParticipated: "-",
        studentParticipation: "-",
      },
    ],
  } = data;

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const [selectedAcademicYear, setSelectedAcademicYear] = useState(0);

  const handleChange = (event) => {
    setSelectedAcademicYear(event.target.value);
  };

  return (
    <Layout>
      <Box display="flex" justifyContent="flex-end">
        <Dropdown
          name="year"
          value={selectedAcademicYear}
          items={academicYears}
          handleChange={handleChange}
          classes={{ select: classes.year }}
        />
      </Box>
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
            {schools[selectedAcademicYear]
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((school, index) => {
                return (
                  <TableRow
                    selected={
                      schoolPositions[selectedAcademicYear].position ===
                      school.position
                    }
                    key={index}
                  >
                    {columns.map((column) => {
                      const value = school[column.id];
                      return (
                        <StyledTableCell
                          key={column.id}
                          align="center"
                          className={
                            column.id === "schoolName"
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
                  count={schools[selectedAcademicYear].length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                />
              </TableCell>
            </TableRow>
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={columns.length}>
                <Typography
                  color="primary"
                  className={classes.currentSchoolLabel}
                  style={
                    schools[selectedAcademicYear].length <= 5
                      ? { paddingTop: "1.5rem" }
                      : undefined
                  }
                >
                  School Position
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              {columns.map((column) => {
                const value = schoolPositions[selectedAcademicYear][column.id];
                return (
                  <StyledTableCell
                    key={column.id}
                    align="center"
                    className={
                      column.id === "schoolName"
                        ? classes.schoolColumn
                        : undefined
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
