import React from "react";
import Box from "@material-ui/core/Box";
import { useSelector } from "react-redux";
import CsvDownloader from "react-csv-downloader";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";
import ParticipantTable from "../../../table/ParticipantTable";
import { useGetEventDetailsQuery } from "../../../../app/api/events";
import { useGetEventParticipantQuery } from "../../../../app/api/schoolEvent";
import useStyles from "./style";

const SchoolParticipantPanel = () => {
  const classes = useStyles();
  const { eventId } = useSelector((state) => state.eventAnalytics);

  const { schoolEventId } = useGetEventDetailsQuery(eventId, {
    selectFromResult: ({ data }) => ({ schoolEventId: data?.schoolEvent }),
  });

  const { data: eventData = {} } = useGetEventParticipantQuery(schoolEventId);

  const {
    participants = [],
    isTeamEvent,
    hasThemes,
    eventFor,
    areCertificatesAvailable,
    certificatesZip,
  } = eventData;

  const columns = [
    {
      id: "name",
      label: `${eventFor} Name`,
      fixedWidth: "14rem",
    },
    { id: "studentClass", label: "Class", fixedWidth: "10.5rem" },
  ];

  if (hasThemes) {
    columns.push({ id: "theme", label: "Theme", fixedWidth: "10.5rem" });
  }

  if (isTeamEvent) {
    columns.push({ id: "team", label: "Team", fixedWidth: "10.5rem" });
  }

  columns.push(
    { id: "status", label: "Status", fixedWidth: "10.5rem" },
    {
      id: "certificate",
      label: "E-Certificates",
      fixedWidth: "12.5rem",
    }
  );

  const generateCSVData = () => {
    return participants.map((participant) => {
      return {
        Name: participant.name,
        Class: participant.studentClass,
        Section: participant.section,
        Theme: participant.theme,
        Team: participant.team,
        Status: participant.status,
        Certificate: participant.certificate,
      };
    });
  };

  return (
    <div>
      <Box
        className={classes.box}
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
      >
        <CsvDownloader
          suffix
          wrapColumnChar="'"
          filename="SchoolParticipantList"
          datas={generateCSVData()}
          className={classes.csvDownloader}
        >
          <Button
            color="primary"
            className={classes.button}
            endIcon={<GetAppIcon />}
          >
            Download List
          </Button>
        </CsvDownloader>
      </Box>
      <ParticipantTable
        noHeader
        colored
        rows={participants}
        columns={columns}
        certificate={certificatesZip}
        areCertificatesAvailable={areCertificatesAvailable}
      />
    </div>
  );
};

export default SchoolParticipantPanel;
