import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Grid from "@material-ui/core/Grid";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useStyles from "./style";
import "./customStyle.css";

const Item = ({ data }) => {
  const classes = useStyles();
  const { title, subHeading, images, date, time, forClass } = data;

  return (
    <div className={classes.itemRoot}>
      <Card>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          className={classes.content}
        >
          <Box className={classes.imageContainer}>
            <img src={images[0]} alt="" className={classes.image} />
          </Box>
          <Typography variant="h4" className={classes.title}>
            {title}
          </Typography>
          <Typography
            display="block"
            variant="body2"
            className={classes.subHeading}
          >
            {subHeading}
          </Typography>

          <Box display="flex" alignItems="center" className={classes.infoBox}>
            <Grid container justify="space-evenly">
              <Box className={classes.innerBox}>
                <Typography color="primary" className={classes.infoLabel}>
                  Date
                </Typography>
                <Typography className={classes.infoValue}>{date}</Typography>
              </Box>
              <Box className={classes.innerBox}>
                <Typography color="primary" className={classes.infoLabel}>
                  Time
                </Typography>
                <Typography className={classes.infoValue}>{time}</Typography>
              </Box>
              <Box className={classes.innerBox}>
                <Typography color="primary" className={classes.infoLabel}>
                  Class
                </Typography>
                <Typography className={classes.infoValue}>
                  {forClass}
                </Typography>
              </Box>
            </Grid>
          </Box>

          <Button
            className={classes.detailsButton}
            size="small"
            color="primary"
            variant="outlined"
          >
            View Details
          </Button>
        </Box>
      </Card>
    </div>
  );
};

const MultiEventCard = ({ data }) => {
  const classes = useStyles();

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1920, min: 1280 },
      items: 2,
    },
    laptop: {
      breakpoint: { max: 1280, min: 960 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 960, min: 600 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
    },
  };

  const CustomRightArrow = ({ onClick }) => {
    return (
      <IconButton
        onClick={() => onClick()}
        color="primary"
        className={classes.buttonRight}
      >
        <DoubleArrowIcon className={classes.icon} />
      </IconButton>
    );
  };

  const CustomLeftArrow = ({ onClick }) => {
    return (
      <IconButton
        onClick={() => onClick()}
        color="primary"
        className={classes.buttonLeft}
      >
        <DoubleArrowIcon
          className={classes.icon}
          style={{ transform: "scaleX(-1)" }}
        />
      </IconButton>
    );
  };

  return (
    <div className={classes.root}>
      <Carousel
        responsive={responsive}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {data.map((eventData, index) => {
          return <Item key={index} data={eventData} />;
        })}
      </Carousel>
    </div>
  );
};

export default MultiEventCard;
