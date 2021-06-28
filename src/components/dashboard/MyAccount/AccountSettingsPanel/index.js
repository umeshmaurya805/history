import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import Avatar from "@material-ui/core/Avatar";
import UpdatePassword from "../../../common/UpdatePassword";
import UpdateContactNumber from "../../../common/UpdateContactNumber";
import UpdateBoard from "../../../common/UpdateBoard";
import UpdateAffiliationNumber from "../../../common/UpdateAffiliationNumber";
import useStyles from "./style";
import UpdateLogo from "../../../common/UpdateLogo";

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

  const initialState = {
    password: false,
    board: false,
    contactNumber: false,
    affiliationNumber: false,
    logo: false,
    coordinator: false,
  };

  const [open, setOpen] = useState(initialState);

  const handleClickOpen = (id) => {
    switch (id) {
      case 0:
        setOpen({ ...initialState, password: true });
        break;
      case 1:
        setOpen({ ...initialState, board: true });
        break;
      case 2:
        setOpen({ ...initialState, contactNumber: true });
        break;
      case 3:
        setOpen({ ...initialState, affiliationNumber: true });
        break;
      case 4:
        setOpen({ ...initialState, logo: true });
        break;
      case 5:
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
      <Box className={classes.box}>
        <Typography className={classes.name}>School name</Typography>
        <Typography className={classes.value}>ABC Public School</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Email address</Typography>
        <Typography className={classes.value}>abc@gmail.com</Typography>
      </Box>
      <Box className={classes.editableBox}>
        <Typography className={classes.name}>Password</Typography>
        <EditableInfo
          onClick={() => handleClickOpen(0)}
          value={"***********"}
        />
      </Box>
      <Typography color="primary" className={classes.title}>
        School Details
      </Typography>
      <Box className={classes.box}>
        <Typography className={classes.name}>School address</Typography>
        <Typography className={classes.value}>abc, abc street</Typography>
      </Box>
      <Box className={classes.editableBox}>
        <Typography className={classes.name}>Board</Typography>
        <EditableInfo onClick={() => handleClickOpen(1)} value={"CBSE"} />
      </Box>
      <Box className={classes.editableBox}>
        <Typography className={classes.name}>School Contact Number</Typography>
        <EditableInfo onClick={() => handleClickOpen(2)} value={"123456789"} />
      </Box>
      <Box className={classes.editableBox}>
        <Typography className={classes.name}>Affiliation number</Typography>
        <EditableInfo onClick={() => handleClickOpen(3)} value={"12468153"} />
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Logo</Typography>
        <div>
          <Box className={classes.logoBox}>
            <Avatar src={undefined} className={classes.logo}>
              {""}
            </Avatar>
          </Box>
          <Button
            onClick={() => handleClickOpen(4)}
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
          onClick={() => handleClickOpen(5)}
          className={classes.titleButton}
          aria-label="edit"
        >
          <EditIcon className={classes.editIcon} color="primary" />
        </IconButton>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Name</Typography>
        <Typography className={classes.coordinatorValue}>Elon Musk</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Designation</Typography>
        <Typography className={classes.coordinatorValue}>Teacher</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Contact Number</Typography>
        <Typography className={classes.coordinatorValue}>123456789</Typography>
      </Box>
      <Box className={classes.box}>
        <Typography className={classes.name}>Email address</Typography>
        <Typography className={classes.coordinatorValue}>
          xyz@gmail.com
        </Typography>
      </Box>
      <UpdatePassword
        open={open.password}
        handleClose={handleClose}
        aria-labelledby="update-password-dialog"
      />
      <UpdateBoard
        open={open.board}
        value={"CBSE"}
        handleClose={handleClose}
        aria-labelledby="update-board-dialog"
      />
      <UpdateContactNumber
        open={open.contactNumber}
        value={"123456789"}
        handleClose={handleClose}
        aria-labelledby="update-contact-number-dialog"
      />
      <UpdateAffiliationNumber
        open={open.affiliationNumber}
        value={"12468153"}
        handleClose={handleClose}
        aria-labelledby="update-affiliation-number-dialog"
      />
      <UpdateLogo  open={open.logo}
        handleClose={handleClose}
        aria-labelledby="update-logo-dialog"/>
    </div>
  );
};

export default AccountSettingsPanel;
