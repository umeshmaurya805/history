import React, { useEffect, useState } from "react";
import format from "date-fns/format";
import { useDispatch } from "react-redux";
import EventAnalyticsDialog from "../../../dialog/EventAnalyticsDialog";
import EventsTable from "../../../table/EventsTable";
import EventAnalyticsConfiguration from "../../../config/EventAnalyticsConfiguration";
import { useGetNonCompetitiveEventsQuery } from "../../../../app/api/events";
import { setAnalyticsEventId } from "../../../../app/slices/eventAnalyticsSlice";

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
    tooltipText: "Total schools participated",
  },
  {
    id: "participation",
    label: "Participants",
    fixedWidth: "10rem",
    tooltipText: "Total number of participants",
  },
  {
    id: "status",
    label: "Status",
    fixedWidth: "8rem",
    tooltipText: "Whether your school participated in the event",
  },
  {
    id: "list",
    label: "Details",
    fixedWidth: "9rem",
    tooltipText: "Event details",
  },
];

const NonCompetitivePanel = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const { data } = useGetNonCompetitiveEventsQuery();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (data) {
      setEvents(data);
    }
  }, [data]);

  const handleClickOpen = (id) => {
    dispatch(setAnalyticsEventId(id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const generateCSVData = () => {
    return events.map((event) => {
      return {
        Title: event.title,
        Date: format(new Date(event.date), "PP"),
        Classes: event.classes,
        Schools: event.schoolParticipation,
        Participants: event.participation,
        Status: event.status,
      };
    });
  };

  return (
    <div>
      <EventAnalyticsConfiguration
        data={data}
        onChange={setEvents}
        filename="NonCompetitiveEventsList"
        generateCSVData={generateCSVData}
      />
      <EventsTable
        rows={events}
        columns={columns}
        handleClickOpen={handleClickOpen}
      />
      <EventAnalyticsDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default NonCompetitivePanel;
