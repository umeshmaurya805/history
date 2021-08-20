import React from "react";
import Card from "@material-ui/core/Card";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import playImage from "../../../../assets/svg/play.svg";
import { useGetEventMediaQuery } from "../../../../app/api/events";
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
          target="_blank"
          href={data.url}
        >
          Click here to access
        </Button>
      </CardActions>
    </Card>
  );
};

const EventMediaPanel = () => {
  const classes = useStyles();
  const { eventId } = useSelector((state) => state.eventAnalytics);
  const { data } = useGetEventMediaQuery(eventId);

  const list = [
    {
      category: "Video",
      description: data?.video?.description,
      image: data?.video?.banner,
      url: data?.video?.url,
    },
    {
      category: "Resources",
      description: data?.resource?.description,
      image: data?.resource?.banner,
      url: data?.resource?.url,
    },
    {
      category: "Session Takeaway",
      description: data?.sessionTakeaway?.description,
      image: data?.sessionTakeaway?.banner,
      url: data?.sessionTakeaway?.url,
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
