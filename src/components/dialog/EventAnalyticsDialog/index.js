import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { toast } from "react-toastify";
import format from "date-fns/format";
import InfoChip from "../../common/InfoChip";
import TabLayout from "../../common/TabLayout";
import SchoolParticipantPanel from "./SchoolParticipantPanel";
import EventWinnerPanel from "./EventWinnerPanel";
import EventMediaPanel from "./EventMediaPanel";
import useStyles from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const EventAnalyticsDialog = ({ open, onClose, competitive = false }) => {
  const classes = useStyles();

  const labels = ["Event Winners", "School Participants"];
  const panels = [EventWinnerPanel, SchoolParticipantPanel];

  if (!competitive) {
    labels.push("Event Media");
    panels.push(EventMediaPanel);
  }

  const title = "If You were (Monologue competition)";

  const handlePdfDownload = () => {
    toast.success("PDF Downloaded", { toastId: "pdf" });
  };

  const list = [
    ["Conducted On: ", format(new Date(), "PP")],
    ["Classes: ", "9 - 12"],
    ["Points Gained: ", 30],
    ["Students Participated: ", 1221],
    ["Schools Participated: ", 101],
  ];

  return (
    <Dialog
      scroll="body"
      fullScreen
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
    >
      <DialogContent className={classes.content}>
        <Box display="flex" justifyContent="flex-end">
          <Typography
            variant="h6"
            color="primary"
            className={classes.eventName}
          >
            {title}
          </Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Box className={classes.box}>
          <Grid container className={classes.chips}>
            {list.map((item, index) => {
              return (
                <Grid key={index} item className={classes.chipItems}>
                  <InfoChip name={item[0]} value={item[1]} />
                </Grid>
              );
            })}
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>download</Icon>}
            onClick={(e) => handlePdfDownload()}
          >
            PDF
          </Button>
        </Box>
        <TabLayout
          className={classes.tabLayout}
          labels={labels}
          panels={panels}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EventAnalyticsDialog;
