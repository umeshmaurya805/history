import React from "react";
import EventStats from "../../../common/EventStats";
import ParticipantTable from "../../../table/ParticipantTable";
import avatarMan from "../../../../assets/svg/avatar-man.svg";
import useStyles from "./style";

const WinnerPanel = () => {
  const classes = useStyles();
  const data = [
    {
      name: "Schools Points",
      value: 150,
    },
    {
      name: "Competitive Events",
      value: 15,
    },
    { name: "Non Competitive Events", value: 56 },
    {
      name: "Students",
      value: 2000,
    },
    {
      name: "Teachers",
      value: 250,
    },
  ];

  const isStudent = true;
  const hasTeam = false;

  const participantData = [
    {
      firstName: "ABC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      date: new Date().toLocaleDateString(),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 2,
      event: "Event 1",
    },
    {
      firstName: "BBBB",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      date: new Date().toLocaleDateString(),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 2,
      event: "Event 1",
    },
    {
      firstName: "CCC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      date: new Date().toLocaleDateString(),
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
      currentClass: 10,
      section: "A",
      date: new Date().toLocaleDateString(),
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
      currentClass: 10,
      section: "A",
      date: new Date().toLocaleDateString(),
      theme: "Theme 1",
      team: "Team A",
      participant: 50,
      position: 2,
      event: "Event 1",
    },
    {
      firstName: "QQQ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      date: new Date().toLocaleDateString(),
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
      currentClass: 10,
      section: "A",
      date: new Date().toLocaleDateString(),
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
      label: `${isStudent ? "Student" : "Teacher"} name`,
      fixedWidth: 165,
    },
    { id: "currentClass", label: "Class", fixedWidth: 165 },
    { id: "event", label: "Events", fixedWidth: 165 },
    { id: "participant", label: "Participants", fixedWidth: 165 },
    { id: "position", label: "Positions", fixedWidth: 165 },
  ];

  if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: 165 });

  const rows = participantData.map((row) => {
    const {
      firstName,
      lastName,
      avatar,
      currentClass,
      section,
      event,
      participant,
      position,
    } = row;

    return {
      name: `${firstName} ${lastName}`,
      avatar,
      currentClass,
      section,
      event,
      participant,
      position,
    };
  });

  return (
    <div className={classes.root}>
      <EventStats className={classes.stats} data={data} />
      <ParticipantTable noHeader colored rows={rows} columns={columns} />
    </div>
  );
};

export default WinnerPanel;
