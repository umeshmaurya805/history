import React from "react";
import Table from "@material-ui/core/Table";
import Chip from "@material-ui/core/Chip";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import useStyles, { StyledTableCell } from "./style";
import InfoButton from "../../button/InfoButton";

const EventsTable = ({ rows, columns, handleClickOpen }) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const emptyRows =
    rows.length <= rowsPerPage
      ? 0
      : rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleOnPageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleOnRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.id === "title" ? "left" : "center"}
                  style={{
                    width: column.fixedWidth,
                    minWidth: column.fixedWidth,
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
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
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
                              onClick={() => handleClickOpen(row.slug)}
                              color="primary"
                              className={classes.viewButton}
                            >
                              View
                            </Button>
                          ) : column.id === "status" ? (
                            <Chip
                              size="small"
                              variant="outlined"
                              label={value}
                              className={classes.tag}
                              style={{
                                backgroundColor:
                                  value === "Participated"
                                    ? "#69DE91"
                                    : "#EF7373",
                              }}
                            />
                          ) : (
                            value
                          )}
                        </StyledTableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 63.4 * emptyRows }}>
                <StyledTableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={classes.tablePagination}
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleOnPageChange}
        onRowsPerPageChange={handleOnRowsPerPageChange}
        labelDisplayedRows={({ from, to, count }) =>
          `${from} - ${to} of ${count !== -1 ? count : `more than ${to}`}`
        }
      />
    </Paper>
  );
};

export default EventsTable;