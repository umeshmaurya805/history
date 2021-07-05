import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import ResultCard from "../../card/ResultCard";
import InfoButton from "../../button/InfoButton";
import avatar from "../../../assets/svg/avatar.png";
import useStyles from "./style";

const EventResult = () => {
  const classes = useStyles();

  const [val, setVal] = useState(1);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const iconComponent = (props) => {
    return <ExpandMoreIcon className={props.className} />;
  };

  // moves the menu below the select input
  const menuProps = {
    anchorOrigin: {
      vertical: "bottom",
      horizontal: "left",
    },
    transformOrigin: {
      vertical: "top",
      horizontal: "left",
    },
    getContentAnchorEl: null,
  };

  const data = [
    {
      name: "Priyanka",
      position: 1,
      avatar,
      studentClass: "10th",
      schoolName: "XYZ Public School",
    },
    {
      name: "Priyanka",
      position: 2,
      avatar,
      studentClass: "10th",
      schoolName: "XYZ Public School",
    },
    {
      name: "Priyanka",
      position: 3,
      avatar,
      studentClass: "10th",
      schoolName: "XYZ Public School",
    },
  ];

  return (
    <div className={classes.root}>
      <Box>
        <Grid container justify="space-between">
          <Grid item>
            <Typography className={classes.title}>
              Results
              <InfoButton
                position="right-end"
                text="Result of the events completed till now"
              />
            </Typography>
          </Grid>
          <Grid item className={classes.selector}>
            <FormControl className={classes.selector}>
              <Select
                classes={{ select: classes.select }}
                disableUnderline
                MenuProps={menuProps}
                IconComponent={iconComponent}
                value={val}
                onChange={handleChange}
              >
                <MenuItem value={0}>QUIRIOSITY QUIZ COMPETITION</MenuItem>
                <MenuItem value={1}>ESSAY WRITING COMPETITION</MenuItem>
                <MenuItem value={2}>DANCING COMPETITION</MenuItem>
                <MenuItem value={3}>TEACHER WORKSHOP</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={3} className={classes.resultContainer}>
          {data.map((studentInfo, index) => {
            return (
              <Grid key={index} item style={{ flexGrow: 1 }}>
                <ResultCard info={studentInfo} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default EventResult;
