import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Box from "@material-ui/core/Box";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GroupIcon from "@material-ui/icons/Group";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import {
  useAddTeamMutation,
  useGetTeamsQuery,
} from "../../../../app/api/schoolEvent";
import { useSelector } from "react-redux";
import { useGetEventDetailsQuery } from "../../../../app/api/events";
import protectedHandler from "../../../../utils/protectedHandler";
import useStyles, { useInputBaseStyles } from "./style";

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "0rem 0.3125rem 2rem -0.625rem rgba(0,0,0,0.14)",
    borderRadius: "1rem",
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    borderRadius: "1rem",
    backgroundColor: "rgba(0, 0, 0, .03)",
  },
  content: {
    display: "flex",
    justifyContent: "center",
    "&$expanded": {
      display: "flex",
      justifyContent: "center",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const Team = ({ data: team, expanded, onChange }) => {
  const classes = useStyles();

  return (
    <Accordion
      square
      expanded={expanded === team.name}
      onChange={onChange(team.name)}
    >
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography variant="h6" className={classes.teamName}>
          {team.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {team.members.length > 0 ? (
          <List className={classes.list}>
            {team.members.map((member) => {
              return (
                <ListItem key={member.participant} className={classes.listItem}>
                  <ListItemAvatar>
                    <Avatar src={member.avatar} className={classes.avatar} />
                  </ListItemAvatar>
                  <Box className={classes.studentBox}>
                    <Typography component="p" className={classes.name}>
                      {member.firstName} {member.lastName}
                    </Typography>
                    <Typography component="p" className={classes.class}>
                      Class: {member.studentClass} {member.section}
                    </Typography>
                  </Box>
                </ListItem>
              );
            })}
          </List>
        ) : (
          <Box
            className={classes.emptyBox}
            display="flex"
            justifyContent="center"
          >
            Empty Team
          </Box>
        )}
      </AccordionDetails>
    </Accordion>
  );
};

const AddTeamsPanel = () => {
  const classes = useStyles();
  const inputBaseClasses = useInputBaseStyles();

  const { selectedEventId } = useSelector((state) => state.event);

  const { schoolEventId } = useGetEventDetailsQuery(selectedEventId, {
    selectFromResult: ({ data }) => ({ schoolEventId: data.schoolEvent }),
  });

  const { data = [] } = useGetTeamsQuery(schoolEventId);

  const [addTeam] = useAddTeamMutation();
  const [teamName, setTeamName] = useState("");

  const [expanded, setExpanded] = useState(data[0]?.name);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleAddTeam = protectedHandler(async () => {
    await addTeam({ schoolEventId, team: teamName }).unwrap();
    setTeamName("");
  });

  return (
    <Container className={classes.root}>
      {data.map((team) => (
        <Team
          key={team.name}
          data={team}
          expanded={expanded}
          onChange={handleChange}
        />
      ))}
      <InputBase
        fullWidth
        autoComplete="off"
        name="teamName"
        classes={inputBaseClasses}
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
        placeholder={"Enter team name here"}
        startAdornment={<GroupIcon />}
        endAdornment={
          teamName && (
            <IconButton size="medium" onClick={() => setTeamName("")}>
              <CloseIcon />
            </IconButton>
          )
        }
      />
      <Box display="flex" justifyContent="flex-end">
        <Button
          color="primary"
          variant="contained"
          className={classes.button}
          onClick={handleAddTeam}
          disabled={teamName === ""}
        >
          Add Team
        </Button>
      </Box>
    </Container>
  );
};

export default AddTeamsPanel;
