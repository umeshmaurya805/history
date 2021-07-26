import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import { format } from "date-fns";
import avatarMan from "../../../assets/svg/avatar-man.svg";
import ParticipantTable from "../../table/ParticipantTable";
import useStyles from "./style";

const isStudent = true;
const hasTeam = true;

const data = [
  {
    firstName: "ABC",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 10,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 1",
    team: "Team A",
    status:'Submitted'
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
    status:'Submitted'
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
    status:'Not Submitted'
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
    status:'Submitted'
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
    status:'Not Submitted'
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
    status:'Not Submitted'
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
    status:'Not Submitted'
  },
  {
    firstName: "WWW",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 10,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 1",
    team: "Team A",
    status:'Not Submitted'
  },
  {
    firstName: "HHH",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 4,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 1",
    team: "Team B",
  },
  {
    firstName: "LHJ",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 10,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 1",
    team: "Team B",
  },
  {
    firstName: "GJHGGHJ",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 3,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 1",
    team: "Team A",
    status:'Submitted'
  },
  {
    firstName: "YYY",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 7,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 2",
    team: "Team B",
  },
  {
    firstName: "TTT",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 4,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 2",
    team: "Team A",
    status:'Not Submitted'
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
    status:'Submitted'
  },
  {
    firstName: "PPP",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 10,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 2",
    team: "Team A",
    status:'Submitted'
  },
  {
    firstName: "OOO",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 5,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 1",
    team: "Team A",
    status:'Not Submitted'
  },
  {
    firstName: "HHH",
    lastName: "Surname",
    avatar: avatarMan,
    studentClass: 5,
    section: "A",
    date: format(new Date(), "PP"),
    theme: "Theme 1",
    team: "Team A",
    status:'Submitted'
  },
];

const columns = [
  {
    id: "name",
    label: `${isStudent ? "Student" : "Teacher"} Name`,
    fixedWidth: "10.5rem",
  },
  { id: "studentClass", label: "Class", fixedWidth: "10.5rem" },
  { id: "date", label: "Date", fixedWidth: "10.5rem" },
  { id: "theme", label: "Theme", fixedWidth: "10.5rem" },
];

if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: "10.5rem" });

if (true) columns.push({ id: "status", label: "Status", fixedWidth: "8rem" });

const rows = data.map((participant) => {
  const {
    firstName,
    lastName,
    avatar,
    studentClass,
    section,
    date,
    theme,
    team,
    status,
  } = participant;

  return {
    name: `${firstName} ${lastName}`,
    avatar,
    studentClass,
    section,
    date,
    theme,
    team,
    status,
  };
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ParticipantListDialog = ({ slug, open, onClose }) => {
  const classes = useStyles();

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
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <ParticipantTable rows={rows} columns={columns} />
      </DialogContent>
    </Dialog>
  );
};

export default ParticipantListDialog;
