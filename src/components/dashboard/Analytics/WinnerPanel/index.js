import React from "react";
import ParticipantTable from "../../../table/ParticipantTable";
import useStyles from "./style";
import { useGetSchoolWinnersQuery } from "../../../../app/api/school";

const WinnerPanel = () => {
  const classes = useStyles();

  const { data = [] } = useGetSchoolWinnersQuery();

  const columns = [
    {
      id: "name",
      label: "Student Name",
      fixedWidth: "12rem",
    },
    { id: "studentClass", label: "Class", fixedWidth: "8rem" },
    { id: "event", label: "Competition", fixedWidth: "16rem" },
    { id: "participant", label: "Total Participants", fixedWidth: "10rem" },
    { id: "position", label: "Position", fixedWidth: "10rem" },
  ];

  const generateCSVData = () => {
    return data.map((winner) => {
      return {
        Name: winner.name,
        Class: winner.studentClass,
        Section: winner.section,
        Competition: winner.event,
        "Total Participants": winner.participant,
        Position: winner.position,
      };
    });
  };

  return (
    <div className={classes.root}>
      <ParticipantTable
        title="Winners List"
        colored
        rows={data}
        columns={columns}
        filename="Winners List"
        generateCSVData={generateCSVData}
      />
    </div>
  );
};

export default WinnerPanel;
