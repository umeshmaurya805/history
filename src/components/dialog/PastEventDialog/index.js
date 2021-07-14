import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import avatarMan from "../../../assets/svg/avatar-man.svg";
import ParticipantTable from "../../table/ParticipantTable";
import PastEventCard from "../../card/PastEventCard";
import WinnersList from "./WinnersList";
import useStyles from "./style";
import EventMedia from "./EventMedia";

const isStudent = true;
const hasTeam = false;

const data = [
  {
    firstName: "ABC",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "BBBB",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "CCC",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "DDD",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "GGG",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "QQQ",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "EEE",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "WWW",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "HHH",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 4,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "LHJ",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 10,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "GJHGGHJ",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 3,
    section: "A",
    certificate: "/certificates/1",
  },
  {
    firstName: "YYY",
    lastName: "Surname",
    avatar: avatarMan,
    currentClass: 7,
    section: "A",
    certificate: "/certificates/1",
  },
];

const columns = [
  {
    id: "name",
    label: `${isStudent ? "Student" : "Teacher"} name`,
    fixedWidth: 180,
  },
  { id: "currentClass", label: "Class", fixedWidth: 165 },
  { id: "certificate", label: "E-Certificates", fixedWidth: 165 },
];

if (hasTeam) columns.push({ id: "team", label: "Team", fixedWidth: 165 });

const rows = data.map((participant) => {
  const { firstName, lastName, avatar, currentClass, section, certificate } =
    participant;

  return {
    name: `${firstName} ${lastName}`,
    avatar,
    currentClass,
    section,
    certificate,
  };
});
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PastEventDialog = ({ open, onClose, competitive = false }) => {
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
        <Grid container spacing={4}>
          <Grid item xs={12} lg={6} xl={4}>
            <Grid container spacing={3} className={classes.cardContainer}>
              <Grid item xs={12} sm={6} md={4} lg={12}>
                <PastEventCard competitive={competitive} />
              </Grid>
              <Grid item xs={12} sm={6} md={8} lg={12}>
                {competitive ? <WinnersList />: <EventMedia />}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={6} xl={8}>
            <ParticipantTable colored rows={rows} columns={columns} />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default PastEventDialog;
