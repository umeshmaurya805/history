import React, { useEffect, useState } from "react";
import EventAnalyticsDialog from "../../../dialog/EventAnalyticsDialog";
import EventsTable from "../../../table/EventsTable";
import EventAnalyticsConfiguration from "./../../../config/EventAnalyticsConfiguration/index";
import { useGetCompetitiveEventsQuery } from "../../../../app/api/events";
import { format } from "date-fns";

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

const CompetitivePanel = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  const { data } = useGetCompetitiveEventsQuery();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  const handleClickOpen = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setId(null);
    setOpen(false);
  };

  const generateCSVData = () => {
    return events.map((event) => {
      return {
        Title: event.title,
        Date: format(new Date(event.date), "PP"),
        Classes: event.classes,
        Schools: event.schoolParticipation,
        Participants: event.totalParticipation,
        Status: event.status,
      };
    });
  };

  return (
    <div>
      <EventAnalyticsConfiguration
        competitive
        data={data}
        onChange={setEvents}
        filename="CompetitiveEventsList"
        generateCSVData={generateCSVData}
      />
      <EventsTable
        rows={events}
        columns={columns}
        handleClickOpen={handleClickOpen}
      />
      <EventAnalyticsDialog
        competitive
        id={id}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
};

export default CompetitivePanel;
