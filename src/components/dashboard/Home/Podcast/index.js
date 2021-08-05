import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import podcastImage from "../../../../assets/svg/podcast.svg";
import Title from "../../../common/Title";
import useStyles from "./style";

const Podcast = () => {
  const classes = useStyles();
  const superLargeDesktop = useMediaQuery("@media (min-width: 1920px)");

  return (
    <Box className={classes.root}>
      <Title tooltipText="Monthly Podcast">Podcast</Title>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component="img"
          height={superLargeDesktop ? "340" : "255"}
          image={podcastImage}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.description} component="p">
            Podcast description here Podcast description here Podcast description here Podcast
            description here.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.actionButtons}
            size="small"
            color="primary"
            variant="outlined"
          >
            Preview
          </Button>
          <Button
            className={classes.actionButtons}
            size="small"
            color="primary"
            variant="outlined"
          >
            Download
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Podcast;
