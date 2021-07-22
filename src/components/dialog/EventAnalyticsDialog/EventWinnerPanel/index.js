import React, { useState } from "react";
import Box from "@material-ui/core/Box";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";
import ParticipantTable from "../../../table/ParticipantTable";
import avatarMan from "../../../../assets/svg/avatar-man.svg";
import Dropdown from "../../../common/Dropdown";
import useStyles from "./style";

const EventWinnerPanel = () => {
  const classes = useStyles();
  const [roundValue, setRoundValue] = useState(0);

  const isStudent = true;
  const hasTeam = true;

  const data = [
    {
      firstName: "ABC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
      theme: "Theme 1",
      team: "Team A",
      position: 1,
    },
    {
      firstName: "BBBB",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "XYZ Public School",
      certificate: "/certificates/1",
      theme: "Theme 1",
      team: "Team A",
      position: 1,
    },
    {
      firstName: "CCC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
      theme: "Theme 1",
      team: "Team A",
      position: 1,
    },
    {
      firstName: "DDD",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "IPL Public School",
      certificate: "/certificates/1",
      theme: "Theme 2",
      team: "Team B",
      position: 2,
    },
    {
      firstName: "GGG",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
      theme: "Theme 2",
      team: "Team B",
      position: 2,
    },
    {
      firstName: "QQQ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
      theme: "Theme 3",
      team: "Team C",
      position: 3,
    },
    {
      firstName: "EEE",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "BHARTIA Public School",
      certificate: "/certificates/1",
      theme: "Theme 3",
      team: "Team C",
      position: 3,
    },
    {
      firstName: "WWW",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "BHARTIA Public School",
      certificate: "/certificates/1",
      theme: "Theme 3",
      team: "Team C",
      position: 3,
    },
    {
      firstName: "HHH",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 4,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "LHJ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "GJHGGHJ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 3,
      section: "A",
      schoolName: "XYZ Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "YYY",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 7,
      section: "A",
      schoolName: "BHARTIA Public School",
      certificate: "/certificates/1",
    },
  ];

  const columns = [
    {
      id: "name",
      label: `${isStudent ? "Student" : "Teacher"} Name`,
      fixedWidth: "11.25rem",
    },
    {
      id: "schoolName",
      label: "School Name",
      fixedWidth: "11.25rem",
    },
    { id: "currentClass", label: "Class", fixedWidth: "10.5rem" },
    { id: "theme", label: "Theme", fixedWidth: "10.5rem" },
  ];

  if (hasTeam)
    columns.push({ id: "team", label: "Team", fixedWidth: "10.5rem" });

  if (roundValue === 2)
    columns.push({ id: "position", label: "Position", fixedWidth: "10.5rem" });

  let rows = data.map((participant) => {
    const {
      firstName,
      lastName,
      avatar,
      currentClass,
      section,
      schoolName,
      theme,
      team,
      position,
    } = participant;

    return {
      name: `${firstName} ${lastName}`,
      avatar,
      currentClass,
      section,
      schoolName,
      theme,
      team,
      position,
    };
  });

  if (roundValue === 2) {
    rows = rows.filter((row, index) => index <= 7);
  }

  const roundItems = ["Round 1", "Round 2", "Round 3"];

  const handleChange = (event) => {
    setRoundValue(event.target.value);
  };

  return (
    <div>
      <Box
        className={classes.box}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
      >
        <Dropdown
          name="round"
          value={roundValue}
          items={roundItems}
          handleChange={handleChange}
          classes={{ select: classes.select }}
        />
        <Button
          color="primary"
          className={classes.button}
          endIcon={<GetAppIcon />}
          // onClick={handleDownloadList}
        >
          Download List
        </Button>
      </Box>
      <ParticipantTable
        noHeader
        title="Winners List"
        colored
        rows={rows}
        columns={columns}
      />
    </div>
  );
};

export default EventWinnerPanel;
