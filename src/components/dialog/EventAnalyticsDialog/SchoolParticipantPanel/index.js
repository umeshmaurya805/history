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
  const hasTeam = false;

  const data = [
    {
      firstName: "ABC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
    },
    {
      firstName: "BBBB",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: false,
      // certificate: "/certificates/1",
    },
    {
      firstName: "CCC",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: false,
      // certificate: "/certificates/1",
    },
    {
      firstName: "DDD",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: false,
      // certificate: "/certificates/1",
    },
    {
      firstName: "GGG",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
    },
    {
      firstName: "QQQ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
    },
    {
      firstName: "EEE",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
    },
    {
      firstName: "WWW",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: false,
      // certificate: "/certificates/1",
    },
    {
      firstName: "HHH",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 4,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
    },
    {
      firstName: "LHJ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 10,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
    },
    {
      firstName: "GJHGGHJ",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 3,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
    },
    {
      firstName: "YYY",
      lastName: "Surname",
      avatar: avatarMan,
      currentClass: 7,
      section: "A",
      hasParticipated: true,
      certificate: "/certificates/1",
    },
  ];

  const columns = [
    {
      id: "name",
      label: `${isStudent ? "Student" : "Teacher"} Name`,
      fixedWidth: 180,
    },
    { id: "currentClass", label: "Class", fixedWidth: 165 },
    { id: "status", label: "Status", fixedWidth: 165 },
    { id: "certificate", label: "E-Certificates", fixedWidth: 165 },
  ];

  if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: 165 });

  const rows = data.map((participant) => {
    const {
      firstName,
      lastName,
      avatar,
      currentClass,
      section,
      hasParticipated,
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
      <Box className={classes.box} display="flex" alignItems="center" justifyContent="flex-end">
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
