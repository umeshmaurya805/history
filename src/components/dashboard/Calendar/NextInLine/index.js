import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Chip from "@material-ui/core/Chip";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { useHistory, useParams } from "react-router-dom";
import Title from "../../../common/Title";
import eventImage from "../../../../assets/svg/event-image.png";
import useStyles from "./style";

const NextInLine = () => {
  const classes = useStyles();
  const history = useHistory();
  const { slug } = useParams();

  const events = [
    {
      name: "Event X  Online theatre show",
      startDate: new Date(2021, 6, 1, 15),
      endDate: new Date(2021, 6, 2, 18, 30),
      slug: "event-0",
      subHeading:
        "This is our test event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 1",
      startDate: new Date(2021, 6, 1, 10),
      endDate: new Date(2021, 6, 5, 18, 30),
      slug: "event-1",
      subHeading:
        "This is our first event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 2",
      startDate: new Date(2021, 6, 7, 12),
      endDate: new Date(2021, 6, 10, 18, 30),
      slug: "event-2",
      subHeading:
        "This is our second event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 3",
      startDate: new Date(2021, 6, 9, 8),
      endDate: new Date(2021, 6, 12, 14),
      slug: "event-3",
      subHeading:
        "This is our third event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 4",
      startDate: new Date(2021, 6, 12, 12),
      endDate: new Date(2021, 6, 18, 15),
      slug: "event-4",
      subHeading:
        "This is our fourth event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 5",
      startDate: new Date(2021, 6, 15, 10),
      endDate: new Date(2021, 6, 16, 18, 30),
      slug: "event-5",
      subHeading:
        "This is our fifth event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 6",
      startDate: new Date(2021, 6, 20, 10),
      endDate: new Date(2021, 6, 20, 14, 30),
      slug: "event-6",
      subHeading:
        "This is our sixth event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 7 - World of Theater",
      startDate: new Date(2021, 6, 28, 10),
      endDate: new Date(2021, 7, 4, 20),
      slug: "event-7",
      subHeading:
        "This is our seventh event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 8 - World of Theater",
      startDate: new Date(2021, 6, 28, 8),
      endDate: new Date(2021, 7, 7, 15),
      slug: "event-8",
      subHeading:
        "This is our eight event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
    {
      name: "Event 9 - World of Theater",
      startDate: new Date(2021, 6, 28, 12),
      endDate: new Date(2021, 7, 1, 15),
      slug: "event-9",
      subHeading:
        "This is our ninth event Online theatre show for class 9-12  Online theatre show for class 9-12",
      image: eventImage,
      description: "Event details, rounds timings, etc.",
    },
  ];

  return (
    <div className={classes.root}>
      <Title tooltipText="Events list for the current month">
        Next In Line
      </Title>
      <List aria-label="next-in-line-list" className={classes.list}>
        {events.map((event, index) => {
          return (
            <React.Fragment key={index}>
              <ListItem
                selected={event.slug === slug}
                // autoFocus={event.slug === slug}
                button
                onClick={() =>
                  history.push(`/dashboard/calendar/${event.slug}`)
                }
              >
                <ListItemAvatar>
                  <Avatar className={classes.eventDate}>
                    {event.startDate.getDate()}
                  </Avatar>
                </ListItemAvatar>
                <Box>
                  <Typography component="p" className={classes.eventName}>
                    {event.name}
                  </Typography>
                  <Typography component="p" className={classes.eventSubHeading}>
                    {event.subHeading}
                  </Typography>
                  <Chip
                    size="small"
                    label={index % 3 === 0 ? "Not Registered" : "Registered"}
                    className={classes.eventRegisteredTag}
                    style={{
                      background: index % 3 === 0 ? "#EF7373" : "#69DE91",
                    }}
                  />
                </Box>
              </ListItem>
              {index + 1 !== events.length && <Divider />}
            </React.Fragment>
          );
        })}
      </List>
    </div>
  );
};

export default NextInLine;
