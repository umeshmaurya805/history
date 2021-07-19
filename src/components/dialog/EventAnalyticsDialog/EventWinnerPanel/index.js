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

  const isStudent = true;
  const hasTeam = false;

  const data = [
    {
      firstName: "ABC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "BBBB",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "XYZ Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "CCC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "DDD",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "IPL Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "GGG",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "QQQ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "ABC Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "EEE",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "BHARTIA Public School",
      certificate: "/certificates/1",
    },
    {
      firstName: "WWW",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      schoolName: "BHARTIA Public School",
      certificate: "/certificates/1",
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
      fixedWidth: 180,
    },
    {
      id: "schoolName",
      label: "School Name",
      fixedWidth: 180,
    },
    { id: "currentClass", label: "Class", fixedWidth: 165 },
  ];

  if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: 165 });

  const rows = data.map((participant) => {
    const {
      firstName,
      lastName,
      avatar,
      currentClass,
      section,
      schoolName,
      certificate,
    } = participant;

    return {
      name: `${firstName} ${lastName}`,
      avatar,
      currentClass,
      section,
      schoolName,
      certificate,
    };
  });

  const roundItems = ["Round 1", "Round 2", "Round 3"];

  const [roundValue, setRoundValue] = useState(0);

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
