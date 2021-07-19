import React, { useState } from "react";
import { toast } from "react-toastify";
import EventAnalyticsDialog from "../../../dialog/EventAnalyticsDialog";
import EventsTable from "../../../table/EventsTable";
import EventAnalyticsConfiguration from "./../../../config/EventAnalyticsConfiguration/index";

const columns = [
  {
    id: "title",
    label: "Title",
    fixedWidth: 180,
    tooltipText: "Upcoming event names",
  },
  {
    id: "date",
    label: "Date",
    fixedWidth: 150,
    tooltipText: "Starting date of the event",
  },
  {
    id: "classes",
    label: "Classes",
    fixedWidth: 150,
    tooltipText: "Range of classes which have participated in the event",
  },
  {
    id: "participation",
    label: "Participation ",
    fixedWidth: 150,
    tooltipText: "Total number of participants",
  },
  {
    id: "status",
    label: "Status",
    fixedWidth: 150,
    tooltipText: "Have your school participated or not",
  },
  {
    id: "list",
    label: "Details",
    fixedWidth: 150,
    tooltipText: "Event details",
  },
];

function createData(slug, title, date, classes, participation, status, list) {
  return { slug, title, date, classes, participation, status, list };
}

const eventsList = [
  createData(
    "World-of-Theatre",
    "World of Theatre",
    "11/20/20",
    "5 - 9",
    15,
    "Not Participated"
  ),
  createData(
    "World-of-Theatre",
    "World of Theatre",
    "11/20/20",
    "5 - 9",
    15,
    "Participated"
  ),
  createData(
    "Colors-Around-Painting-Competition",
    "Colors Around Painting Competition",
    "10/15/20",
    "2 - 5",
    23,
    "Not Participated"
  ),
  createData(
    "Trade-to-Territory",
    "Trade to Territory",
    "10/10/20",
    "6 - 12",
    234,
    "Participated"
  ),
  createData(
    "Theatre-in-Education",
    "Theatre in Education",
    "9/27/20",
    "1 - 5",
    5,
    "Not Participated"
  ),
  createData("World-of-Theatre", "World of Theatre", "9/25/20", "5 - 9", 15, 5),
  createData(
    "World-of-Theatre",
    "World of Theatre",
    "11/20/20",
    "5 - 9",
    15,
    "Participated"
  ),
  createData(
    "Colors-Around-Painting-Competition",
    "Colors Around Painting Competition",
    "10/15/20",
    "2 - 5",
    23,
    "Not Participated"
  ),
  createData(
    "Trade-to-Territory",
    "Trade to Territory",
    "10/10/20",
    "6 - 12",
    234,
    "Participated"
  ),
  createData(
    "Theatre-in-Education",
    "Theatre in Education",
    "9/27/20",
    "1 - 5",
    5,
    "Not Participated"
  ),
  createData(
    "World-of-Theatre",
    "World of Theatre",
    "9/25/20",
    "5 - 9",
    15,
    "Participated"
  ),
];

const NonCompetitivePanel = () => {
  const [open, setOpen] = useState(false);
  const [slug, setSlug] = useState(null);

  const handleClickOpen = (slug) => {
    setSlug(slug);
    setOpen(true);
  };

  const handleClose = () => {
    setSlug(null);
    setOpen(false);
  };

  const [option, setOption] = useState({
    status: 0,
    month: 0,
    year: 0,
    class: 0,
    user: 0,
    category: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setOption({ ...option, [name]: value });
  };

  const handleDownloadList = () => {
    toast.success("Events List Downloaded", {
      toastId: "downloadEventList",
    });
  };

  return (
    <div>
      <EventAnalyticsConfiguration
        value={option}
        handleChange={handleChange}
        handleDownloadList={handleDownloadList}
      />
      <EventsTable
        rows={eventsList}
        columns={columns}
        handleClickOpen={handleClickOpen}
      />
      <EventAnalyticsDialog slug={slug} open={open} onClose={handleClose} />
    </div>
  );
};

export default NonCompetitivePanel;
