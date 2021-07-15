import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useStyles from "./style";
import { Box } from "@material-ui/core";

const EventMediaCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <Grid container>
        <Grid item lg={6}>
          <CardMedia
            className={classes.media}
            component="img"
            height="240"
            // image={magazineImage}
          />
        </Grid>
        <Grid item lg={6} className={classes.item}>
          <CardContent>
            <Typography className={classes.description} component="p">
              {data.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.cardActions}>
            <Button
              className={classes.actionButton}
              size="small"
              color="primary"
              variant="outlined"
              // target="_blank"
              // href={data.url}
            >
              Click here to access
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
};

const EventMedia = () => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const list = [
    {
      category: "Video",
      description:
        "Media description here Media description here Media description here Media description here.",
      image: "",
      url: "https://youtube.com",
    },
    {
      category: "Resources",
      description:
        "Resource description here Resource description here Resource description here Resource description here.",
      image: "",
      url: "https://youtube.com",
    },
    {
      category: "Session Takeaway",
      description:
        "Session Takeaway description here Session Takeaway description here Session Takeaway description here Session Takeaway description here.",
      image: "",
      url: "https://youtube.com",
    },
  ];
  return (
    <Box className={classes.root}>
      <Box display="flex">
        {list.map((item, index) => {
          return (
            <Typography
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`${classes.category} ${selectedIndex === index && classes.categorySelected}`}
            >
              {item.category}
            </Typography>
          )
        })}
      </Box>
      <EventMediaCard data={list[selectedIndex]} />
    </Box>
  );
};

export default EventMedia;
