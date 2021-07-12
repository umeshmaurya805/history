import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import ResultCard from "../../../card/ResultCard";
import avatar from "../../../../assets/svg/avatar.png";
import Title from "../../../common/Title/index";
import useStyles from "./style";
import Dropdown from "../../../common/Dropdown";

const EventResult = () => {
  const classes = useStyles();

  const [val, setVal] = useState(0);

  const handleChange = (event) => {
    setVal(event.target.value);
  };

  const data = [
    {
      name: "Priyanka",
      position: 1,
      avatar,
      studentClass: "10th",
      schoolName: "ABC Public School",
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

  const items = [
    "QUIRIOSITY QUIZ COMPETITION",
    "ESSAY WRITING COMPETITION",
    "DANCING COMPETITION",
    "TEACHER WORKSHOP",
  ];

  return (
    <div className={classes.root}>
      <Box>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Title tooltipText="Result of the events completed till now">
              Results
            </Title>
          </Grid>
          <Grid item className={classes.selector}>
            <Dropdown
              value={val}
              items={items}
              handleChange={handleChange}
              styles={{ select: classes.select }}
            />
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
