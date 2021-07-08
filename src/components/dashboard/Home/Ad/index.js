import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Slide } from "react-slideshow-image";
import adImage from "../../../../assets/svg/event-ad-image.png";
import "react-slideshow-image/dist/styles.css";
import useStyles from "./style";

const Ad = () => {
  const classes = useStyles();

  const data = [{ image: adImage, url: "/" }];

  const slideProperties = {
    arrows: data.length > 1,
    canSwipe: data.length > 1,
    transitionDuration: data.length > 1 ? 1000 : 0,
    easing: "ease",
    cssClass: classes.slider,
    prevArrow: (
      <IconButton color="primary" className={classes.adButtonLeft}>
        <DoubleArrowIcon
          className={classes.adIcon}
          style={{ transform: "scaleX(-1)" }}
        />
      </IconButton>
    ),
    nextArrow: (
      <IconButton color="primary" className={classes.adButtonRight}>
        <DoubleArrowIcon className={classes.adIcon} />
      </IconButton>
    ),
  };

  return (
    data?.length !== 0 && (
      <Box className={classes.root}>
        <div className={classes.adLabel}>Ad</div>
        <Slide {...slideProperties}>
          {data.map((ad, index) => {
            return (
              <a
                key={index}
                className="each-slide"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={classes.ad}
                  style={{
                    backgroundImage: `url(${ad.image})`,
                  }}
                ></div>
              </a>
            );
          })}
        </Slide>
      </Box>
    )
  );
};

export default Ad;
