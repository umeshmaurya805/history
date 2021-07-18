import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import eventImage from "../../../../assets/svg/event-image.png";
import EventCardLarge from "../../../card/EventCardLarge";
import EventCard from "../../../card/EventCard";
import useStyles from "./style";
import { getEvents } from "../../../../data";

const FeaturedEvent = () => {
  const classes = useStyles();
  const isMobileScreen = useMediaQuery("(max-width:700px)");

  const eventList = getEvents().filter(({ isFeatured }) => isFeatured);

  // const eventList = [
  //   {
  //     title: "Trade To Territory 1",
  //     summary:
  //       "Embark on the journey of historical era of ( 16th - 19th century) that witnessed the transition of foreign piwers in India.",
  //     image: eventImage,
  //     forClass: "9 - 12",
  //     date: format(new Date(), "PP"),
  //     time: format(new Date(), "p"),
  //     slug: "event-1",
  //   },
  //   {
  //     title: "Trade To Territory 2",
  //     summary:
  //       "Embark on the journey of historical era of ( 16th - 19th century) that witnessed the transition of foreign piwers in India.",
  //     image: eventImage,
  //     forClass: "9 - 12",
  //     date: format(new Date(), "PP"),
  //     time: format(new Date(), "p"),
  //     slug: "event-2",
  //   },
  //   {
  //     title: "Trade To Territory 3",
  //     summary:
  //       "Embark on the journey of historical era of ( 16th - 19th century) that witnessed the transition of foreign piwers in India.",
  //     image: eventImage,
  //     forClass: "9 - 12",
  //     date: format(new Date(), "PP"),
  //     time: format(new Date(), "p"),
  //     slug: "event-3",
  //   },
  //   {
  //     title: "Trade To Territory 4",
  //     summary:
  //       "Embark on the journey of historical era of ( 16th - 19th century) that witnessed the transition of foreign piwers in India.",
  //     image: eventImage,
  //     forClass: "9 - 12",
  //     date: format(new Date(), "PP"),
  //     time: format(new Date(), "p"),
  //     slug: "event-4",
  //   },
  //   {
  //     title: "Trade To Territory 5",
  //     summary:
  //       "Embark on the journey of historical era of ( 16th - 19th century) that witnessed the transition of foreign piwers in India.",
  //     image: eventImage,
  //     forClass: "9 - 12",
  //     date: format(new Date(), "PP"),
  //     time: format(new Date(), "p"),
  //     slug: "event-5",
  //   },
  //   {
  //     title: "Trade To Territory 6",
  //     summary:
  //       "Embark on the journey of historical era of ( 16th - 19th century) that witnessed the transition of foreign piwers in India.",
  //     image: eventImage,
  //     forClass: "9 - 12",
  //     date: format(new Date(), "PP"),
  //     time: format(new Date(), "p"),
  //     slug: "event-6",
  //   },
  // ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1920 },
      items: Math.min(3, eventList.length),
    },
    desktop: {
      breakpoint: { max: 1920, min: 1400 },
      items: Math.min(1, eventList.length),
    },
    laptop: {
      breakpoint: { max: 1400, min: 1000 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1000, min: 700 },
      items: 1,
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
    <Carousel
      className={classes.root}
      responsive={responsive}
      customRightArrow={<CustomRightArrow />}
      customLeftArrow={<CustomLeftArrow />}
    >
      {isMobileScreen
        ? eventList.map((eventData, index) => {
            return <EventCard key={index} data={eventData} />;
          })
        : eventList.map((eventData, index) => {
            return <EventCardLarge key={index} data={eventData} />;
          })}
    </Carousel>
  );
};

export default FeaturedEvent;
