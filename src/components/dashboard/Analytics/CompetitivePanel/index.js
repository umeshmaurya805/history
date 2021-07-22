import React, { useState } from "react";
import format from "date-fns/format";
import { toast } from "react-toastify";
import { getEvents } from "../../../../data";
import EventAnalyticsDialog from "../../../dialog/EventAnalyticsDialog";
import EventsTable from "../../../table/EventsTable";
import EventAnalyticsConfiguration from "./../../../config/EventAnalyticsConfiguration/index";

const columns = [
  {
    id: "title",
    label: "Title",
    fixedWidth: "11.25rem",
    tooltipText: "Upcoming event names",
  },
  {
    id: "date",
    label: "Date",
    fixedWidth: "9.375rem",
    tooltipText: "Starting date of the event",
  },
  {
    id: "classes",
    label: "Classes",
    fixedWidth: "9.375rem",
    tooltipText: "Range of classes which have participated in the event",
  },
  {
    id: "participation",
    label: "Participation ",
    fixedWidth: "9.375rem",
    tooltipText: "Total number of participants",
  },
  {
    id: "status",
    label: "Status",
    fixedWidth: "9.375rem",
    tooltipText: "Have your school participated or not",
  },
  {
    id: "list",
    label: "Details",
    fixedWidth: "9.375rem",
    tooltipText: "Event details",
  },
];

const today = new Date();
today.setHours(0, 0, 0, 0);

const eventsList = getEvents().map((event) => {
  return {
    title: event.title,
    slug: event.slug,
    date: format(event.startDate, "PP"),
    classes: `${event.forClass.from} - ${event.forClass.to}`,
    participation: 8,
    status: event.isRegistered ? "Participated" : "Not Participated",
  };
});

const CompetitivePanel = () => {
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
        competitive
        value={option}
        handleChange={handleChange}
        handleDownloadList={handleDownloadList}
      />
      <EventsTable
        rows={eventsList}
        columns={columns}
        handleClickOpen={handleClickOpen}
      />
      <EventAnalyticsDialog
        competitive
        slug={slug}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default CompetitivePanel;
