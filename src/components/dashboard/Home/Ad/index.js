import React from "react";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useGetAdsQuery } from "../../../../app/api/ad";
import useStyles from "./style";

const Ad = () => {
  const classes = useStyles();
  const { data = [] } = useGetAdsQuery();

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
          {data.map((ad) => {
            return (
              <a
                key={ad._id}
                className="each-slide"
                href={ad.url}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={classes.ad}
                  style={{
                    backgroundImage: `url(${ad.banner})`,
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
