import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { useSelector } from "react-redux";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import protectedHandler from "../../../../utils/protectedHandler";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
// import avatarMan from "../../../../assets/svg/avatar-man.svg";
import ParticipantTable from "../../../table/ParticipantTable";
import {
  useGetAvailableStudentsQuery,
  useInviteStudentsMutation,
  useViewInvitedStudentsQuery,
} from "../../../../app/api/schoolEvent";
import { useGetEventDetailsQuery } from "../../../../app/api/events";
import { notify } from "../../../../utils";
import SearchBar from "../../../common/Searchbar";
import useStyles from "./style";

const AddStudentsPanel = () => {
  const classes = useStyles();
  const { selectedEventId } = useSelector((state) => state.event);

  const { schoolEventId } = useGetEventDetailsQuery(selectedEventId, {
    selectFromResult: ({ data }) => ({ schoolEventId: data.schoolEvent }),
  });

  const [inviteStudentToEvent] = useInviteStudentsMutation();

  const { data = [] } = useViewInvitedStudentsQuery(schoolEventId);

  const { data: students = [] } = useGetAvailableStudentsQuery(schoolEventId);

  const columns = [
    {
      id: "name",
      label: "Student Name",
      fixedWidth: "10.5rem",
    },
    { id: "email", label: "Email", fixedWidth: "10.5rem" },
    { id: "studentClass", label: "Class", fixedWidth: "10.5rem" },
    { id: "phone", label: "Contact", fixedWidth: "10.5rem" },
    { id: "status", label: "Status", fixedWidth: "10.5rem" },
  ];

  const [searchName, setSearchName] = useState("");

  const handleSearchName = (e) => {
    setSearchName(e.target.value);
  };

  const inviteStudent = protectedHandler(async (student) => {
    await inviteStudentToEvent({
      schoolEventId,
      studentId: student._id,
    }).unwrap();

    notify.success(student.name, `${student.name} invited`, 3000);
  });

  const renderSearchList = () => {
    const searchList = students.filter(({ name }) =>
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
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar src={student.avatar} className={classes.avatar} />
            </ListItemAvatar>
            <Box className={classes.studentBox}>
              <Typography component="p" className={classes.eventName}>
                {student.name}
              </Typography>
              <Typography component="p" className={classes.eventSubHeading}>
                Class: {student.studentClass} {student.section}
              </Typography>
            </Box>
            <Button
              onClick={() => inviteStudent(student)}
              variant="outlined"
              color="primary"
              className={classes.inviteButton}
              disabled={student.isInvited}
            >
              {student.isInvited ? "Invited" : "Invite"}
            </Button>
          </ListItem>
          {currentList.length !== index + 1 && <Divider />}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={classes.root}>
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
      <div>
        <div
          onClick={() => setSearchName("")}
          className={classes.greyBackground}
          style={searchName !== "" ? { visibility: "visible", opacity: 1 } : {}}
        />

        <ParticipantTable
          noHeader
          rows={data}
          columns={columns}
        />
      </div>
    </div>
  );
};

export default AddStudentsPanel;
