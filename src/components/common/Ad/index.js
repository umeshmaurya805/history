import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Slide } from "react-slideshow-image";
import adImage from "../../../assets/svg/event-ad-image.png";
import "react-slideshow-image/dist/styles.css";
import useStyles from "./style";

const adData = [
  { image: adImage, url: "/" },
  { image: adImage, url: "/" },
];

const Ad = () => {
  const classes = useStyles();

  const slideProperties = {
    arrows: adData.length > 1,
    canSwipe: adData.length > 1,
    transitionDuration: adData.length > 1 ? 1000 : 0,
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
    adData?.length !== 0 && (
      <Box className={classes.root}>
        <div className={classes.adLabel}>Ad</div>
        <Slide {...slideProperties}>
          {adData.map((ad, index) => {
            return (
              <a
                key={index}
                className="each-slide"
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    backgroundImage: `url(${ad.image})`,
                    height: 390,
                    width: 268,
                    marginLeft: -4,
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
