import React from "react";
import eventImage from "../../../assets/svg/event-image.png";
import SingleEventCard from "../card/SingleEventCard";
import MultiEventCard from "../card/MultiEventCard";

const FeaturedEvent = () => {
  const eventData = [
    {
      title: "Trade To Territory 1",
      subHeading:
        "Embark on the journey of historical era of ( 16th - 19th century) thatwitnessed the transition of foreign piwers in India.",
      images: [eventImage, eventImage],
      forClass: "9 - 12",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      title: "Trade To Territory 2",
      subHeading:
        "Embark on the journey of historical era of ( 16th - 19th century) thatwitnessed the transition of foreign piwers in India.",
      images: [eventImage, eventImage],
      forClass: "9 - 12",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      title: "Trade To Territory 3",
      subHeading:
        "Embark on the journey of historical era of ( 16th - 19th century) thatwitnessed the transition of foreign piwers in India.",
      images: [eventImage, eventImage],
      forClass: "9 - 12",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      title: "Trade To Territory 4",
      subHeading:
        "Embark on the journey of historical era of ( 16th - 19th century) thatwitnessed the transition of foreign piwers in India.",
      images: [eventImage, eventImage],
      forClass: "9 - 12",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      title: "Trade To Territory 5",
      subHeading:
        "Embark on the journey of historical era of ( 16th - 19th century) thatwitnessed the transition of foreign piwers in India.",
      images: [eventImage, eventImage],
      forClass: "9 - 12",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
    {
      title: "Trade To Territory 6",
      subHeading:
        "Embark on the journey of historical era of ( 16th - 19th century) thatwitnessed the transition of foreign piwers in India.",
      images: [eventImage, eventImage],
      forClass: "9 - 12",
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    },
  ];

  return eventData.length === 1 ? (
    <SingleEventCard data={eventData[0]} />
  ) : (
    <MultiEventCard data={eventData} />
  );
};

export default FeaturedEvent;
