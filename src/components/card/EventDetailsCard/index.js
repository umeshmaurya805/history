import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import Box from "@material-ui/core/Box";
import { toast } from "react-toastify";
import useStyles from "./style";

const InfoBox = ({ name, value, circled }) => {
  const classes = useStyles();

  return (
    <Box display="flex" flexWrap="wrap" flexGrow={1} className={classes.item}>
      <Typography color="primary" className={classes.itemName}>
        {name}
      </Typography>
      <Typography className={circled && classes.itemValue}>{value}</Typography>
    </Box>
  );
};

const EventDetailsCard = () => {
  const classes = useStyles();
  const name = "If You were (Monologue competition)";

  const handlePdfDownload = () => {
    toast.success("PDF Downloaded", { toastId: "pdf" });
  };

  const list = [
    ["Conducted On: ", new Date().toLocaleDateString("in")],
    ["Classes: ", "9 - 12"],
    ["Points Gained: ", 30],
    ["Students Participated: ", 1221],
    ["Schools Participated: ", 101],
  ];

  return (
    <Card>
      <CardContent className={classes.content}>
        <Typography variant="h6" color="primary" className={classes.eventName}>
          {name}
        </Typography>
        <Grid container>
          <Grid item>
            <Grid container className={classes.chips}>
              {list.map((item, index) => {
                return (
                  <Grid key={index} item style={{ flexGrow: 1 }}>
                    <InfoBox
                      name={item[0]}
                      value={item[1]}
                      circled={index <=1}
                    />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
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
      </CardContent>
    </Card>
  );
};

export default EventDetailsCard;
