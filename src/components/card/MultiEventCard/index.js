import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
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
  const isMobile = useMediaQuery("(max-width:1180px)");
  const isLaptop = useMediaQuery("(max-width:1490px)");
  const isDesktop = useMediaQuery("(max-width:1800px)");
  const isLargeDesktop = useMediaQuery("(max-width:2200px)");

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 2200 }, items: 5 },
    largeDesktop: { breakpoint: { max: 2200, min: 1800 }, items: 4 },
    desktop: { breakpoint: { max: 1800, min: 1490 }, items: 3 },
    laptop: { breakpoint: { max: 1490, min: 1180 }, items: 2 },
    mobile: { breakpoint: { max: 1180, min: 0 }, items: 1 },
  };

  const getWidth = () => {
    const singleCardWidth = 310;
    if (isMobile) return singleCardWidth;
    else if (isLaptop) return singleCardWidth * 2;
    else if (isDesktop) return singleCardWidth * 3;
    else if (isLargeDesktop) return singleCardWidth * 4;
    else return singleCardWidth * 5;
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
      <div
        className={classes.container}
        style={{
          width: `${getWidth()}px`,
        }}
      >
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
    </div>
  );
};

export default MultiEventCard;
