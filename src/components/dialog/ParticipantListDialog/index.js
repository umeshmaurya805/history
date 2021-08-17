import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CancelIcon from "@material-ui/icons/Cancel";
import Box from "@material-ui/core/Box";
import ParticipantTable from "../../table/ParticipantTable";
import useStyles from "./style";
import { useGetUpcomingEventsQuery } from "../../../app/api/schoolEvent";
import { format } from "date-fns";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ParticipantListDialog = ({ eventId = "", open, onClose }) => {
  const classes = useStyles();

  const { data = {} } = useGetUpcomingEventsQuery(undefined, {
    selectFromResult: ({ data }) => ({
      data: data?.find((event) => eventId === event._id),
    }),
  });

  const {
    eventFor = "Student",
    isTeamEvent,
    hasThemes,
    hasSubmissions,
    participants = [],
  } = data;

  const columns = [
    {
      id: "name",
      label: `${eventFor} Name`,
      fixedWidth: "10.5rem",
    },
    { id: "studentClass", label: "Class", fixedWidth: "10.5rem" },
    { id: "submissionDate", label: "Date", fixedWidth: "10.5rem" },
  ];

  if (hasThemes)
    columns.push({ id: "theme", label: "Theme", fixedWidth: "10.5rem" });

  if (isTeamEvent)
    columns.push({ id: "team", label: "Team", fixedWidth: "10.5rem" });

  if (hasSubmissions)
    columns.push({ id: "status", label: "Status", fixedWidth: "8rem" });

  const generateCSVData = () => {
    return participants.map((participant) => {
      return {
        Name: participant.name,
        Class: participant.studentClass,
        Section: participant.section,
        "Submission Date": format(new Date(participant.submissionDate), "PP"),
        Team: participant.team,
        Theme: participant.theme,
        Status: participant.status,
      };
    });
  };

  return (
    <Dialog
      scroll="body"
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <DialogContent className={classes.content}>
        <Box display="flex" justifyContent="flex-end" className={classes.box}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            size="small"
          >
            <CancelIcon fontSize="large" color="error" />
          </IconButton>
        </Box>
        <ParticipantTable
          rows={participants}
          columns={columns}
          filename="RegistrationList"
          generateCSVData={generateCSVData}
        />
      </DialogContent>
    </Dialog>
  );
};

export default ParticipantListDialog;
