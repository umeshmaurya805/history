import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import avatarMan from "../../../assets/svg/avatar-man.svg";
import ParticipantTable from "../../table/ParticipantTable";
import useStyles from "./style";
import SearchBar from "../../common/Searchbar";

const isStudent = true;
// const hasTeam = true;

const data = [
  {
    firstName: "ABC",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    email: "abc@example.com",
    contact: "0123456789",
  },
  {
    firstName: "BBBB",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    email: "abc@example.com",
    contact: "0123456789",
  },
  {
    firstName: "CCC",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    email: "abc@example.com",
    contact: "0123456789",
  },
  {
    firstName: "DDD",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    email: "abc@example.com",
    contact: "0123456789",
  },
];

const columns = [
  {
    id: "name",
    label: `${isStudent ? "Student" : "Teacher"} Name`,
    fixedWidth: 165,
  },
  { id: "email", label: "Email", fixedWidth: 165 },
  { id: "currentClass", label: "Class", fixedWidth: 165 },
  { id: "contact", label: "Contact", fixedWidth: 165 },
];

// if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: 165 });

const rows = data.map((participant) => {
  const { firstName, lastName, avatar, currentClass, section, email, contact } =
    participant;

  return {
    name: `${firstName} ${lastName}`,
    avatar,
    currentClass,
    section,
    email,
    contact,
  };
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ViewParticipantsDialog = ({ open, onClose }) => {
  const classes = useStyles();
  const [searchName, setSearchName] = useState("");

  const handleParticipantAdd = () => {};

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <Dialog
      scroll="body"
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <DialogContent className={classes.content}>
        <Box display="flex" justifyContent="flex-end" className={classes.box}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Toolbar className={classes.toolbar}>
          <SearchBar
            placeholder="Search name"
            value={searchName}
            onChange={handleSearchName}
            onCancel={() => setSearchName("")}
          />
          <Button
            // color="primary"
            variant="outlined"
            className={classes.addButton}
            onClick={handleParticipantAdd}
          >
            Add
          </Button>
        </Toolbar>
        <ParticipantTable noHeader editable rows={rows} columns={columns} />
      </DialogContent>
    </Dialog>
  );
};

export default ViewParticipantsDialog;
