import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import avatarMan from "../../../../assets/svg/avatar-man.svg";
import ParticipantTable from "../../../table/ParticipantTable";
import SearchBar from "../../../common/Searchbar";
import useStyles from "./style";

const AddStudentsPanel = () => {
  const classes = useStyles();

  const isStudent = true;
  // const hasTeam = true;

  const data = [
    {
      name: "ABC Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      email: "abc@example.com",
      contact: "0123456789",
      status: "Invited",
    },
    {
      name: "BBBB Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      email: "abc@example.com",
      contact: "0123456789",
      status: "Registered",
    },
    {
      name: "CCC Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      email: "abc@example.com",
      contact: "0123456789",
      status: "Registered",
    },
    {
      name: "DDD Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      email: "abc@example.com",
      contact: "0123456789",
      status: "Invited",
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
    { id: "status", label: "Status", fixedWidth: 165 },
  ];

  // if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: 165 });

  const rows = data.map((participant) => {
    const { name, avatar, currentClass, section, email, contact,status } = participant;

    return {
      name,
      avatar,
      currentClass,
      section,
      email,
      contact,
      status
    };
  });
  const [searchName, setSearchName] = useState("");

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  const renderSearchList = () => {
    const searchList = data.filter(({ name }) =>
      name.toLowerCase().includes(searchName.toLowerCase())
    );
    if (searchList.length === 0) {
      return (
        <ListItem>
          <Typography className={classes.emptyItemText} variant="body2">
            No student registered with this name
          </Typography>
        </ListItem>
      );
    }

    return searchList.map((student, index, currentList) => {
      return (
        <React.Fragment key={index}>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={student.avatar} className={classes.avatar} />
            </ListItemAvatar>
            <Box className={classes.eventBox}>
              <Typography component="p" className={classes.eventName}>
                {student.name}
              </Typography>
              <Typography component="p" className={classes.eventSubHeading}>
                {`Class: ${student.currentClass} - ${student.section}`}
              </Typography>
            </Box>
            <Button
              // onClick={() => handleClickOpen(row.slug)}
              variant="outlined"
              color="primary"
              className={classes.inviteButton}
            >
              Invite
            </Button>
          </ListItem>
          {currentList.length !== index + 1 && <Divider />}
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <Toolbar className={classes.toolbar}>
        <SearchBar
          placeholder="Add students by name"
          value={searchName}
          onChange={handleSearchName}
          onCancel={() => setSearchName("")}
        />
        {searchName !== "" && (
          <List aria-label="student-invite-list" className={classes.list}>
            {renderSearchList()}
          </List>
        )}
      </Toolbar>
      <div className={classes.content}>
        <div
          onClick={() => setSearchName("")}
          className={classes.greyBackground}
          style={{ visibility: searchName !== "" ? "visible" : "hidden" }}
        />
        <ParticipantTable noHeader editable rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default AddStudentsPanel;
