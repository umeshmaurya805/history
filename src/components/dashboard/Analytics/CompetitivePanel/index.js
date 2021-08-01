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
    fixedWidth: "12rem",
  },
  {
    id: "date",
    label: "Date",
    fixedWidth: "8rem",
  },
  {
    id: "classes",
    label: "Classes",
    fixedWidth: "8rem",
  },
  {
    id: "schoolParticipation",
    label: "Schools",
    fixedWidth: "8rem",
    tooltipText: "Total number of schools participated in the competition",
  },
  {
    id: "participation",
    label: "Students",
    fixedWidth: "10rem",
    tooltipText: "Total number of students participated in the competition",
  },
  {
    id: "status",
    label: "Status",
    fixedWidth: "8rem",
    tooltipText: "Whether your school participated in the competition",
  },
  {
    id: "list",
    label: "Details",
    fixedWidth: "9rem",
    tooltipText: "Competition details",
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
    schoolParticipation: 200,
    participation: 2000,
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
