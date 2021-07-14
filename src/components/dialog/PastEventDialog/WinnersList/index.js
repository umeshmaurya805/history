import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ResultCard from "../../../card/ResultCard";
import avatarMan from "../../../../assets/svg/avatar-man.svg";
import useStyles from "./style";

const WinnersList = () => {
  const classes = useStyles();

  const resultData = [
    {
      name: "Monu",
      position: 1,
      avatar: avatarMan,
      studentClass: "10th",
      schoolName: "ABC Public School",
    },
    {
      name: "Monu",
      position: 2,
      avatar: avatarMan,
      studentClass: "10th",
      schoolName: "XYZ Public School",
    },
    {
      name: "Monu",
      position: 3,
      avatar: avatarMan,
      studentClass: "10th",
      schoolName: "XYZ Public School",
    },
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" color="primary" className={classes.title}>
        Winners List
      </Typography>
      <Grid container spacing={2}>
        {resultData.map((studentInfo, index) => {
          return (
            <Grid key={index} item xs={12} lg={index === 0 ? 12 : 6}>
              <ResultCard info={studentInfo} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default WinnersList;
