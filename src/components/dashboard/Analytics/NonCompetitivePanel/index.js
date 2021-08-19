import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import EventAnalyticsDialog from "../../../dialog/EventAnalyticsDialog";
import EventsTable from "../../../table/EventsTable";
import EventAnalyticsConfiguration from "../../../config/EventAnalyticsConfiguration";
import { useGetEventAnalyticsQuery } from "../../../../app/api/school";
import { useGetNonCompetitiveEventsQuery } from "../../../../app/api/events";
import format from "date-fns/format";

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

const today = new Date();
today.setHours(0, 0, 0, 0);

// const eventsList = [].map((event) => {
//   return {
//     title: event.title,
//     id: event._id,
//     date: format(event.startDate, "PP"),
//     classes: `${event.forClass.from} - ${event.forClass.to}`,
//     schoolParticipation: 200,
//     participation: 2000,
//     status: event.isRegistered ? "Participated" : "Not Participated",
//   };
// });

const NonCompetitivePanel = () => {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);
  const { data = [] } = useGetNonCompetitiveEventsQuery();

  const [events, setEvents] = useState(data);
  console.log("events data ", data);

  // useEffect(() => {
  //   if (data) {
  //     setEvents(data);
  //   }
  // }, [data]);

  const handleClickOpen = (id) => {
    setId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setId(null);
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
      <EventAnalyticsDialog id={id} open={open} onClose={handleClose} />
    </div>
  );
};

export default NonCompetitivePanel;
