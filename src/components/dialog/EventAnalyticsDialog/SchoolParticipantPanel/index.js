import React from "react";
import Box from "@material-ui/core/Box";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";
import ParticipantTable from "../../../table/ParticipantTable";
import avatarMan from "../../../../assets/svg/avatar-man.svg";
import useStyles from "./style";

const SchoolParticipantPanel = () => {
  const classes = useStyles();

  const isStudent = true;
  const hasTeam = true;

  const data = [
    {
      firstName: "ABC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
      theme: "Theme 1",
      team: "Team A",
    },
    {
      firstName: "BBBB",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: false,
      // certificate: "/certificates/1",
      theme: "Theme 2",
      team: "Team B",
    },
    {
      firstName: "CCC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: false,
      theme: "Theme 1",
      team: "Team A",
      // certificate: "/certificates/1",
    },
    {
      firstName: "DDD",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: false,
      theme: "Theme 1",
      team: "Team A",
      // certificate: "/certificates/1",
    },
    {
      firstName: "GGG",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      theme: "Theme 1",
      team: "Team A",
      certificate: "/certificates/1",
    },
    {
      firstName: "QQQ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      theme: "Theme 2",
      team: "Team B",
      certificate: "/certificates/1",
    },
    {
      firstName: "EEE",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      theme: "Theme 1",
      team: "Team A",
      certificate: "/certificates/1",
    },
    {
      firstName: "WWW",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: false,
      theme: "Theme 1",
      team: "Team A",
      // certificate: "/certificates/1",
    },
    {
      firstName: "HHH",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 4,
      section: "A",
      hasParticipated: true,
      theme: "Theme 1",
      team: "Team A",
      certificate: "/certificates/1",
    },
    {
      firstName: "LHJ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      theme: "Theme 3",
      team: "Team C",
      certificate: "/certificates/1",
    },
    {
      firstName: "GJHGGHJ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 3,
      section: "A",
      hasParticipated: true,
      theme: "Theme 2",
      team: "Team B",
      certificate: "/certificates/1",
    },
    {
      firstName: "YYY",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 7,
      section: "A",
      hasParticipated: true,
      theme: "Theme 1",
      team: "Team A",
      certificate: "/certificates/1",
    },
  ];

  const columns = [
    {
      id: "name",
      label: `${isStudent ? "Student" : "Teacher"} Name`,
      fixedWidth: "11.25rem",
    },
    { id: "currentClass", label: "Class", fixedWidth: "10.5rem" },
    { id: "theme", label: "Theme", fixedWidth: "10.5rem" },
  ];

  if (hasTeam)
    columns.push({ id: "team", label: "Team", fixedWidth: "10.5rem" });

  columns.push({ id: "status", label: "Status", fixedWidth: "10.5rem" });
  columns.push({ id: "certificate", label: "E-Certificates", fixedWidth: '12.5rem' });

  const rows = data.map((participant) => {
    const {
      firstName,
      lastName,
      avatar,
      currentClass,
      section,
      hasParticipated,
      theme,
      team,
      certificate,
    } = participant;

    let status = "Not Participated";

    if (hasParticipated) {
      status = "Participated";
    }

    const isCertificateReceived = hasParticipated;

    return {
      name: `${firstName} ${lastName}`,
      avatar,
      currentClass,
      section,
      theme,
      team,
      status,
      hasParticipated,
      isCertificateReceived,
      certificate,
    };
  });

  // const handleDownloadList = () => {
  //   toast.success("Events List Downloaded", {
  //     toastId: "downloadEventList",
  //   });
  // };

  return (
    <div>
      <Box
        className={classes.box}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Button
          color="primary"
          className={classes.button}
          endIcon={<GetAppIcon />}
          // onClick={handleDownloadList}
        >
          Download List
        </Button>
      </Box>
      <ParticipantTable noHeader colored rows={rows} columns={columns} />
    </div>
  );
};

export default SchoolParticipantPanel;
