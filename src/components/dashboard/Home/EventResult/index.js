import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ResultCard from "../../../card/ResultCard";
import avatar from "../../../../assets/svg/avatar-man.svg";
import Title from "../../../common/Title/index";
import Dropdown from "../../../common/Dropdown";
import useStyles from "./style";

const EventResult = () => {
  const classes = useStyles();

  const initialState = { theme: 0, event: 0 };
  const [option, setOption] = useState(initialState);

  const handleChange = (event, key) => {
    setOption({ ...option, [key]: event.target.value });
  };

  const data = [
    {
      name: "Abc Surname",
      position: 1,
      avatar,
      studentClass: "9 A",
      schoolName: "ABC Public School",
    },
    {
      name: "Lmn Surname",
      position: 2,
      avatar,
      studentClass: "10 B",
      schoolName: "ABC Public School",
    },
    {
      name: "Xyz Surname",
      position: 3,
      avatar,
      studentClass: "10 A",
      schoolName: "ABC Public School",
    },
  ];

  const events = [
    "QUIRIOSITY QUIZ COMPETITION",
    "ESSAY WRITING COMPETITION",
    "DANCING COMPETITION",
    "TEACHER WORKSHOP",
  ];

  // const themes = ["Theme 1", "Theme 2", "Theme 3"];

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Title tooltipText="Result of the events completed till now">
            Results
          </Title>
        </Grid>
        <Grid item className={classes.selector}>
          {/* <Dropdown
            value={option.theme}
            items={themes}
            handleChange={(e) => handleChange(e, "theme")}
            classes={{ select: classes.selectTheme }}
          /> */}
          <Dropdown
            value={option.event}
            items={events}
            handleChange={(e) => handleChange(e, "event")}
            classes={{ select: classes.selectEvent }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.resultContainer}>
        {data.map((studentInfo, index) => {
          return (
            <Grid key={index} item style={{ flexGrow: 1 }}>
              <ResultCard info={studentInfo} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default EventResult;
