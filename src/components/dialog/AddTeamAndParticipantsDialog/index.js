import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import Slide from "@material-ui/core/Slide";
import CloseIcon from "@material-ui/icons/Close";
import Box from "@material-ui/core/Box";
import TabLayout from "../../common/TabLayout";
import AddStudentsPanel from "./AddStudentsPanel";
import AddTeachersPanel from "./AddTeachersPanel";
import AddTeamsPanel from "./AddTeamsPanel";
import useStyles from "./style";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddTeamAndParticipantsDialog = ({
  open,
  onClose,
  hasTeam,
  isLimited,
  isEventForStudent,
}) => {
  const classes = useStyles();

  const panels = [];
  const labels = [];

  if (isEventForStudent) {
    if (isLimited) {
      labels.push("Add Students");
      panels.push(AddStudentsPanel);
    }
  } else {
    labels.push("Add Teachers");
    panels.push(AddTeachersPanel);
  }

  if (hasTeam) {
    labels.push("Add Teams");
    panels.push(AddTeamsPanel);
  }

  const renderComponent = () => {
    if (panels.length === 1) {
      const Component = panels[0];
      return <Component />;
    } else {
      return (
        <TabLayout
          className={classes.tabLayout}
          labels={labels}
          panels={panels}
        />
      );
    }
  };

  return (
    <Dialog
    className={classes.root}
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
        {renderComponent()}
      </DialogContent>
    </Dialog>
  );
};

export default AddTeamAndParticipantsDialog;
