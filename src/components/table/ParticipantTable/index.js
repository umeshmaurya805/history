import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Avatar from "@material-ui/core/Avatar";
import PropTypes from "prop-types";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { toast } from "react-toastify";
import firstMedal from "../../../assets/svg/first.svg";
import secondMedal from "../../../assets/svg/second.svg";
import thirdMedal from "../../../assets/svg/third.svg";
import useStyles, { StyledTableCell, BlueStyledTableCell } from "./style";
import { format } from "date-fns";

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

const EnhancedTableHead = (props) => {
  const {
    classes,
    columns,
    order,
    orderBy,
    onRequestSort,
    isCertificatesAvailable,
    editable,
    colored,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  const TableHeadWrapper = ({ children, ...props }) => {
    return colored ? (
      <BlueStyledTableCell {...props}>{children}</BlueStyledTableCell>
    ) : (
      <StyledTableCell {...props}>{children}</StyledTableCell>
    );
  };

  const SortLabelWrapper = ({ column }) => {
    return (
      <TableSortLabel
        className={column.id !== "name" ? classes.sortLabel : null}
        active={orderBy === column.id}
        direction={orderBy === column.id ? order : "asc"}
        onClick={createSortHandler(column.id)}
      >
        {column.label}
        {orderBy === column.id ? (
          <span className={classes.visuallyHidden}>
            {order === "desc" ? "sorted descending" : "sorted ascending"}
          </span>
        ) : null}
      </TableSortLabel>
    );
  };

  return (
    <TableHead>
      <TableRow>
        {columns.map((column) => {
          if (column.id === "name") {
            return (
              <TableHeadWrapper
                key={column.id}
                align="left"
                sortDirection={orderBy === column.id ? order : false}
                style={{
                  width: column.fixedWidth,
                  minWidth: column.fixedWidth,
                }}
              >
                <SortLabelWrapper column={column} />
              </TableHeadWrapper>
            );
          } else if (column.id === "certificate") {
            return (
              <TableHeadWrapper
                key={column.id}
                align="center"
                style={{
                  width: column.fixedWidth,
                  minWidth: column.fixedWidth,
                }}
              >
                {column.label}
                <IconButton
                  className={classes.bulkCertificateDownload}
                  aria-label="download-certificate"
                  color="primary"
                  disabled={!isCertificatesAvailable}
                  // onClick={() => handleCertificateDownload(row.slug)}
                >
                  <GetAppIcon fontSize="small" />
                </IconButton>
              </TableHeadWrapper>
            );
          } else if (
            column.id === "contact" ||
            column.id === "email" ||
            column.id === "teachClasses"
          ) {
            return (
              <TableHeadWrapper
                key={column.id}
                align="center"
                sortDirection={orderBy === column.id ? order : false}
                style={{
                  width: column.fixedWidth,
                  minWidth: column.fixedWidth,
                }}
              >
                {column.label}
              </TableHeadWrapper>
            );
          } else {
            return (
              <TableHeadWrapper
                key={column.id}
                align="center"
                sortDirection={orderBy === column.id ? order : false}
                style={{
                  width: column.fixedWidth,
                  minWidth: column.fixedWidth,
                }}
              >
                <SortLabelWrapper column={column} />
              </TableHeadWrapper>
            );
          }
        })}
        {editable && (
          <StyledTableCell
            style={{
              width: "1.25rem",
              minWidth: "1.25rem",
            }}
          />
        )}
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const ParticipantTable = ({
  rows,
  columns,
  title = "Participants List",
  editable = false,
  colored = false,
  noHeader = false,
}) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("name");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  let isCertificatesAvailable = false;
  const medals = [firstMedal, secondMedal, thirdMedal];

  rows.forEach((row) => {
    if (row.isCertificateReceived) isCertificatesAvailable = true;
  });

  const emptyRows =
    rows.length <= rowsPerPage
      ? 0
      : rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleOnPageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleOnRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDownloadList = () => {
    toast.success("Participants List Downloaded", {
      toastId: "downloadList",
    });
  };

  const handleParticipantDelete = (slug) => {
    toast.success("Participant removed from the event", {
      toastId: "ParticipantDelete",
    });
  };

  const handleCertificateView = (slug) => {
    toast.success("Preview Certificate", {
      toastId: "Preview Certificate",
    });
  };

  const handleCertificateDownload = (slug) => {
    toast.success("Certificate download", {
      toastId: "CertificateDownload",
    });
  };

  return (
    <Paper className={classes.root}>
      <TableContainer>
        {!noHeader && (
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" color="primary" className={classes.title}>
              {title}
            </Typography>
            <Button
              color="primary"
              className={classes.downloadButton}
              endIcon={<GetAppIcon />}
              onClick={handleDownloadList}
            >
              Download List
            </Button>
          </Toolbar>
        )}
        <Table aria-label="participant table">
          <EnhancedTableHead
            editable={editable}
            colored={colored}
            classes={classes}
            columns={columns}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            isCertificatesAvailable={isCertificatesAvailable}
          />

          <TableBody>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if (column.id === "name") {
                        return (
                          <StyledTableCell key={column.id} align="left">
                            <Box display="flex" alignItems="center">
                              <Avatar
                                src={row.avatar}
                                className={classes.avatar}
                              />
                              <Typography className={classes.participantName}>
                                {value}
                              </Typography>
                            </Box>
                          </StyledTableCell>
                        );
                      } else if (column.id === "certificate") {
                        return (
                          <StyledTableCell key={column.id} align="center">
                            <Button
                              onClick={() => handleCertificateView(row.slug)}
                              color="primary"
                              className={classes.viewButton}
                              disabled={!row.hasParticipated}
                            >
                              View
                            </Button>
                            <IconButton
                              className={classes.downloadCertificate}
                              aria-label="download-certificate"
                              color="primary"
                              disabled={!row.hasParticipated}
                              onClick={() =>
                                handleCertificateDownload(row.slug)
                              }
                            >
                              <GetAppIcon fontSize="small" />
                            </IconButton>
                          </StyledTableCell>
                        );
                      } else if (column.id === "status") {
                        return (
                          <StyledTableCell key={column.id} align="center">
                            <Chip
                              size="small"
                              variant="outlined"
                              label={value}
                              className={classes.tag}
                              style={{
                                backgroundColor:
                                  value === "Participated" ||
                                  value === "Registered" ||
                                  value === "Submitted" // TODO: Make it : hasParticipated
                                    ? "#69DE91"
                                    : value === "Invited"
                                    ? "#ffff99"
                                    : "#EF7373",
                              }}
                            />
                          </StyledTableCell>
                        );
                      } else if (column.id === "position") {
                        return (
                          <StyledTableCell key={column.id} align="center">
                            <img
                              className={classes.medals}
                              src={medals[value - 1]}
                              alt=""
                            />
                          </StyledTableCell>
                        );
                      } else if (column.id === "submissionDate") {
                        return (
                          <StyledTableCell key={column.id} align="center">
                            {format(new Date(value), "PP")}
                          </StyledTableCell>
                        );
                      } else {
                        return (
                          <StyledTableCell key={column.id} align="center">
                            {value}
                            {column.id === "studentClass" && ` ${row.section}`}
                          </StyledTableCell>
                        );
                      }
                    })}
                    {editable && (
                      <StyledTableCell align="right">
                        <IconButton
                          className={classes.deleteButton}
                          onClick={() => handleParticipantDelete(row.slug)}
                        >
                          <DeleteOutlineIcon fontSize="small" />
                        </IconButton>
                      </StyledTableCell>
                    )}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: `${4.5625 * emptyRows}rem` }}>
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

export default ParticipantTable;
