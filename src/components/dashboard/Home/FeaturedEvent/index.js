import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import EventCardLarge from "../../../card/EventCardLarge";
import EventCard from "../../../card/EventCard";
import Title from "../../../common/Title";
import { useGetFeaturedEventsQuery } from "../../../../app/api/events";
import useStyles from "./style";

const FeaturedEvent = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:700px)");

  const { data = [] } = useGetFeaturedEventsQuery();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: Math.min(3, data.length),
    },
    desktop: {
      breakpoint: { max: 1920, min: 1100 },
      items: Math.min(3, data.length),
    },
    laptop: {
      breakpoint: { max: 1100, min: 700 },
      items: Math.min(2, data.length),
    },
    mobile: { breakpoint: { max: 700, min: 0 }, items: 1 },
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
    data.length > 0 && (
      <React.Fragment>
        <Title>Featured Event{data.length >= 1 && "s"}</Title>
        <Carousel
          className={classes.root}
          responsive={responsive}
          customRightArrow={<CustomRightArrow />}
          customLeftArrow={<CustomLeftArrow />}
        >
          {isMobileScreen || data.length >= 2
            ? data.map((eventData) => {
                return <EventCard key={eventData._id} data={eventData} />;
              })
            : data.map((eventData) => {
                return <EventCardLarge key={eventData._id} data={eventData} />;
              })}
        </Carousel>
      </React.Fragment>
    )
  );
};

export default FeaturedEvent;
