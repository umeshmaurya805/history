import React from "react";
import format from "date-fns/format";
import ParticipantTable from "../../../table/ParticipantTable";
import avatarMan from "../../../../assets/svg/avatar-man.svg";
import useStyles from "./style";

const WinnerPanel = () => {
  const classes = useStyles();

  const isStudent = true;
  const hasTeam = false;

  const participantData = [
    {
      firstName: "ABC",
      lastName: "Surname",
      avatar: avatarMan,
      studentClass: 10,
      section: "A",
      date: format(new Date(), "PP"),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 1,
      event: "Event 1",
    },
    {
      firstName: "BBBB",
      lastName: "Surname",
      avatar: avatarMan,
      studentClass: 10,
      section: "A",
      date: format(new Date(), "PP"),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 1,
      event: "Event 1",
    },
    {
      firstName: "CCC",
      lastName: "Surname",
      avatar: avatarMan,
      studentClass: 10,
      section: "A",
      date: format(new Date(), "PP"),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 2,
      event: "Event 1",
    },
    {
      firstName: "DDD",
      lastName: "Surname",
      avatar: avatarMan,
      studentClass: 10,
      section: "A",
      date: format(new Date(), "PP"),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 2,
      event: "Event 1",
    },
    {
      firstName: "GGG",
      lastName: "Surname",
      avatar: avatarMan,
      studentClass: 10,
      section: "A",
      date: format(new Date(), "PP"),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 3,
      event: "Event 1",
    },
    {
      firstName: "QQQ",
      lastName: "Surname",
      avatar: avatarMan,
      studentClass: 10,
      section: "A",
      date: format(new Date(), "PP"),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 2,
      event: "Event 1",
    },
    {
      firstName: "EEE",
      lastName: "Surname",
      avatar: avatarMan,
      studentClass: 10,
      section: "A",
      date: format(new Date(), "PP"),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 2,
      event: "Event 1",
    },
  ];

  const columns = [
    {
      id: "name",
      label: `${isStudent ? "Student" : "Teacher"} Name`,
      fixedWidth: "11rem",
    },
    { id: "studentClass", label: "Class", fixedWidth: "11rem" },
    { id: "event", label: "Competition", fixedWidth: "11rem" },
    { id: "participant", label: "Total Participants", fixedWidth: "11rem" },
    { id: "position", label: "Position", fixedWidth: "11rem" },
  ];

  if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: "11rem" });

  const rows = participantData.map((row) => {
    const {
      firstName,
      lastName,
      avatar,
      studentClass,
      section,
      event,
      participant,
      position,
    } = row;

    return {
      name: `${firstName} ${lastName}`,
      avatar,
      studentClass,
      section,
      event,
      participant,
      position,
    };
  });

  return (
    <div className={classes.root}>
      <ParticipantTable
        title="Winners List"
        colored
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default WinnerPanel;
