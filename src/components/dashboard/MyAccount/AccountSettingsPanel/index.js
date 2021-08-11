import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import UpdatePasswordDialog from "../../../dialog/UpdatePasswordDialog";
import UpdateCoordinatorDialog from "../../../dialog/UpdateCoordinatorDialog";
import UpdateLogoDialog from "../../../dialog/UpdateLogoDialog";
import UpdateContactNumberDialog from "../../../dialog/UpdateContactNumberDialog";
import { useGetProfileQuery } from "../../../../app/api/school";
import { useGetMainCoordinatorQuery } from "../../../../app/api/coordinator";
import UpdateEmailDialog from "../../../dialog/UpdateEmailDialog";
import useStyles from "./style";

const EditableInfo = ({ value, onClick }) => {
  const classes = useStyles();

  return (
    <Box className={classes.iconBox}>
      <Typography>{value}</Typography>
      <IconButton
        color="primary"
        onClick={onClick}
        className={classes.iconButton}
        aria-label="edit"
      >
        <EditIcon className={classes.editIcon} color="primary" />
      </IconButton>
    </Box>
  );
};

const AccountSettingsPanel = () => {
  const classes = useStyles();
  const { data: schoolProfile = {} } = useGetProfileQuery();
  const { data } = useGetMainCoordinatorQuery();
  const school = data ? data.school : {};
  const coordinator = data ? data.coordinator : {};

  const initialState = {
    email: false,
    password: false,
    contactNumber: false,
    logo: false,
    coordinator: false,
  };

  const [open, setOpen] = useState(initialState);

  const handleClickOpen = (id) => {
    switch (id) {
      case 0:
        setOpen({ ...initialState, email: true });
        break;
      case 1:
        setOpen({ ...initialState, password: true });
        break;
      case 2:
        setOpen({ ...initialState, contactNumber: true });
        break;
      case 3:
        setOpen({ ...initialState, logo: true });
        break;
      case 4:
        setOpen({ ...initialState, coordinator: true });
        break;
      default: // do nothing
    }
  };

  const handleClose = () => {
    setOpen(initialState);
  };

  return (
    <div className={classes.root}>
      <Typography color="primary" className={classes.title}>
        Account Details
      </Typography>
      <Box className={`${classes.box} ${classes.boxStart}`}>
        <Typography className={classes.name}>Username</Typography>
        <Typography className={classes.value}>{school.username}</Typography>
      </Box>
      <Box className={classes.editableBox}>
        <Typography className={classes.name}>Email Address</Typography>
        <EditableInfo onClick={() => handleClickOpen(0)} value={school.email} />
      </Box>
      <Box className={`${classes.editableBox} ${classes.boxEnd}`}>
        <Typography className={classes.name}>Password</Typography>
        <EditableInfo
          onClick={() => handleClickOpen(1)}
          value={school.displayPassword}
        />
      </Box>
      <Typography color="primary" className={classes.title}>
        School Details
      </Typography>
      <Box className={`${classes.box} ${classes.boxStart}`}>
        <Typography className={classes.name}>School Name</Typography>
        <Typography className={classes.value}>{schoolProfile.name}</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>School Address</Typography>
        <Typography className={classes.value}>
          {schoolProfile.address}
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Board</Typography>
        <Typography className={classes.value}>
          {schoolProfile.boards?.join(", ")}
        </Typography>
      </Box>
      <Box className={classes.editableBox}>
        <Typography className={classes.name}>School Contact Number</Typography>
        <EditableInfo
          onClick={() => handleClickOpen(2)}
          value={schoolProfile.phones?.join(", ")}
        />
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Affiliation Number</Typography>
        <Typography className={classes.value}>
          {schoolProfile.affiliationNumbers?.join(", ")}
        </Typography>
      </Box>
      <Box className={`${classes.box} ${classes.boxEnd}`}>
        <Typography className={classes.name}>Logo</Typography>
        <div>
          <Box className={classes.logoBox}>
            <Avatar src={schoolProfile.logo} className={classes.logo}>
              {""}
            </Avatar>
          </Box>
          <Button
            onClick={() => handleClickOpen(3)}
            color="primary"
            className={classes.logoChange}
          >
            Change
          </Button>
        </div>
      </Box>
      <Box className={classes.coordinatorTitle}>
        <Typography color="primary" className={classes.title}>
          School Coordinator Details
        </Typography>
        <IconButton
          color="primary"
          onClick={() => handleClickOpen(4)}
          className={classes.titleButton}
          aria-label="edit"
        >
          <EditIcon className={classes.editIcon} color="primary" />
        </IconButton>
      </Box>
      <Box className={`${classes.box} ${classes.boxStart}`}>
        <Typography className={classes.name}>Name</Typography>
        <Typography className={classes.coordinatorValue}>
          {`${coordinator.firstName} ${coordinator.lastName}`}
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Designation</Typography>
        <Typography className={classes.coordinatorValue}>
          {coordinator.designation}
        </Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Contact Number</Typography>
        <Typography className={classes.coordinatorValue}>
          {coordinator.phone}
        </Typography>
      </Box>
      <Box className={`${classes.box} ${classes.boxEnd}`}>
        <Typography className={classes.name}>Email Address</Typography>
        <Typography className={classes.coordinatorValue}>
          {coordinator.email}
        </Typography>
      </Box>
      <UpdateEmailDialog
        open={open.email}
        value={"demo@gmail.com"}
        handleClose={handleClose}
        aria-labelledby="update-email-dialog"
      />
      <UpdatePasswordDialog
        open={open.password}
        handleClose={handleClose}
        aria-labelledby="update-password-dialog"
      />
      <UpdateContactNumberDialog
        open={open.contactNumber}
        values={schoolProfile.phones}
        handleClose={handleClose}
        aria-labelledby="update-contact-number-dialog"
      />
      <UpdateLogoDialog
        open={open.logo}
        handleClose={handleClose}
        aria-labelledby="update-logo-dialog"
      />
      <UpdateCoordinatorDialog
        open={open.coordinator}
        handleClose={handleClose}
        aria-labelledby="update-coordinator-dialog"
      />
    </div>
  );
};

export default AccountSettingsPanel;
