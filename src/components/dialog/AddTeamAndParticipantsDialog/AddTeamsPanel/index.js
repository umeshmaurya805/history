import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import InputBase from "@material-ui/core/InputBase";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import GroupIcon from "@material-ui/icons/Group";
import CloseIcon from "@material-ui/icons/Close";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Typography from "@material-ui/core/Typography";
import avatar from "../../../../assets/svg/avatar-man.svg";
import useStyles from "./style";

const AddTeamsPanel = () => {
  const classes = useStyles();
  const [teamName, setTeamName] = useState("");

  const teams = [
    {
      name: "Team A",
      avatar,
    },
    {
      name: "Team B",
      avatar,
    },
    {
      name: "Team C",
      avatar,
    },
  ];

  const renderTeams = () => {
    return teams.map((team, index) => {
      return (
        <Box
          key={index}
          className={classes.teamBox}
          display="flex"
          alignItems="center"
        >
          <GroupIcon />
          <Typography className={classes.teamName}>{team.name}</Typography>
          <AvatarGroup className={classes.avatarGroup} max={3}>
            <Avatar alt="Remy Sharp" src={team.avatar} />
            <Avatar alt="Travis Howard" src={team.avatar} />
            <Avatar alt="Cindy Baker" src={team.avatar} />
            <Avatar alt="Agnes Walker" src={team.avatar} />
            <Avatar alt="Trevor Henderson" src={team.avatar} />
          </AvatarGroup>
          <IconButton
            className={classes.iconButton}
            size="medium"
            onClick={() => setTeamName("")}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            className={classes.iconButton}
            size="medium"
            onClick={() => setTeamName("")}
          >
            <DeleteIcon  fontSize="small"/>
          </IconButton>
        </Box>
      );
    });
  };

  return (
    <Container>
      <Box className={classes.teamsContainer}>{renderTeams()}</Box>
      <InputBase
        fullWidth
        autoComplete="off"
        name="teamName"
        classes={classes}
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
          onClick={() => {}}
        >
          Add Team
        </Button>
      </Box>
    </Container>
  );
};

export default AddTeamsPanel;
