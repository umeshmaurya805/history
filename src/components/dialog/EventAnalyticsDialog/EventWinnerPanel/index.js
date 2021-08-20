import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import CsvDownloader from "react-csv-downloader";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";
import ParticipantTable from "../../../table/ParticipantTable";
import { useGetEventResultByIdQuery } from "../../../../app/api/events";
import Dropdown from "../../../common/Dropdown";
import useStyles from "./style";

const EventWinnerPanel = () => {
  const classes = useStyles();
  const { eventId } = useSelector((state) => state.eventAnalytics);
  const { data = {} } = useGetEventResultByIdQuery(eventId);

  const {
    isTeamEvent,
    hasThemes,
    noOfRounds = 1,
    activeRoundIndex = 0,
    rounds = [],
  } = data;

  const [roundValue, setRoundValue] = useState(activeRoundIndex);

  const columns = [
    {
      id: "name",
      label: "Student Name",
      fixedWidth: "14rem",
    },
    { id: "studentClass", label: "Class", fixedWidth: "10.5rem" },
    {
      id: "schoolName",
      label: "School Name",
      fixedWidth: "12rem",
    },
    {
      id: "address",
      label: "School Address",
      fixedWidth: "12rem",
    },
  ];

  if (isTeamEvent)
    columns.push({ id: "team", label: "Team", fixedWidth: "10.5rem" });

  if (hasThemes)
    columns.push({ id: "theme", label: "Theme", fixedWidth: "10.5rem" });

  if (roundValue === noOfRounds - 1)
    columns.push({ id: "position", label: "Position", fixedWidth: "10.5rem" });

  const roundItems = [];

  for (var i = 0; i <= activeRoundIndex; i++) {
    roundItems.push(`Round ${i + 1}`);
  }

  const handleChange = (event) => {
    setRoundValue(event.target.value);
  };

  const generateCSVData = () => {
    return rounds[roundValue]
      ? rounds[roundValue].map((participant) => {
          const data = {
            Name: participant.name,
            Class: participant.studentClass,
            Section: participant.section,
            Theme: participant.theme,
            Team: participant.team,
            "School Name": participant.schoolName,
            "School Address": participant.address,
          };

          if (roundValue === noOfRounds - 1) {
            data.Position = participant.position;
          }

          return data;
        })
      : [];
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
        <CsvDownloader
          suffix
          wrapColumnChar="'"
          filename="EventWinnersList"
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
        title="Winners List"
        colored
        rows={rounds[roundValue] ? rounds[roundValue] : []}
        columns={columns}
      />
    </div>
  );
};

export default EventWinnerPanel;
