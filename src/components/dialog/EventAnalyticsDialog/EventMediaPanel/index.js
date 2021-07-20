import React from "react";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import playImage from "../../../../assets/svg/play.svg";
import mediaImage from "../../../../assets/svg/media-image.svg";
import useStyles from "./style";

const EventMediaCard = ({ data, hasVideo }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      {hasVideo && <img className={classes.playImage} src={playImage} alt="" />}
      <CardMedia
        className={classes.media}
        component="img"
        height="300"
        image={data.image}
      />
      <CardContent className={classes.cardContent}>
      <Typography className={classes.categoryName} component="p">
          {data.category}
        </Typography>
        <Typography className={classes.description} component="p">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          variant="outlined"
          // target="_blank"
          // href={data.url}
        >
          Click here to access
        </Button>
      </CardActions>
    </Card>
  );
};

const EventMediaPanel = () => {
  const classes = useStyles();

  const list = [
    {
      category: "Video",
      description:
        "Media description here Media description here Media description here Media description here.",
      image: mediaImage,
      url: "https://youtube.com",
    },
    {
      category: "Resources",
      description:
        "Resource description here Resource description here Resource description here Resource description here.",
      image: mediaImage,
      url: "https://youtube.com",
    },
    {
      category: "Session Takeaway",
      description:
        "Session Takeaway description here Session Takeaway description here Session Takeaway description here Session Takeaway description here.",
      image: mediaImage,
      url: "https://youtube.com",
    },
  ];
  return (
    <Grid container className={classes.root} justifyContent="space-evenly">
      {list.map((item, index) => {
        return (
          <Grid key={index} item className={classes.item}>
            <EventMediaCard data={item} hasVideo={index === 0} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default EventMediaPanel;
