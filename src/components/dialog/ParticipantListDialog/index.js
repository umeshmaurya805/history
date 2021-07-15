import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
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
    currentClass: 10,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 1",
    team: "Team A",
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
  },
  {
    firstName: "WWW",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 1",
    team: "Team A",
  },
  {
    firstName: "HHH",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 4,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 1",
    team: "Team B",
  },
  {
    firstName: "LHJ",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 1",
    team: "Team B",
  },
  {
    firstName: "GJHGGHJ",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 3,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 1",
    team: "Team A",
  },
  {
    firstName: "YYY",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 7,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 2",
    team: "Team B",
  },
  {
    firstName: "TTT",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 4,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 2",
    team: "Team A",
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
  },
  {
    firstName: "PPP",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 2",
    team: "Team A",
  },
  {
    firstName: "OOO",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 5,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 1",
    team: "Team A",
  },
  {
    firstName: "HHH",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 5,
    section: "A",
    date: new Date().toLocaleDateString(),
    theme: "Theme 1",
    team: "Team A",
  },
];

const columns = [
  {
    id: "name",
    label: `${isStudent ? "Student" : "Teacher"} name`,
    fixedWidth: 165,
  },
  { id: "currentClass", label: "Class", fixedWidth: 165 },
  { id: "date", label: "Date", fixedWidth: 165 },
  { id: "theme", label: "Theme", fixedWidth: 165 },
];

if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: 165 });

const rows = data.map((participant) => {
  const {
    firstName,
    lastName,
    avatar,
    currentClass,
    section,
    date,
    theme,
    team,
  } = participant;

  return {
    name: `${firstName} ${lastName}`,
    avatar,
    currentClass,
    section,
    date,
    theme,
    team,
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