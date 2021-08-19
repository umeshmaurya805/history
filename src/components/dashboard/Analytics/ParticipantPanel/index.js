import React, { useEffect, useMemo, useState } from "react";
import { Line, defaults } from "react-chartjs-2";
import format from "date-fns/format";
import AnalyticsConfiguration from "../../../config/AnalyticsConfiguration";
import { useGetEventAnalyticsQuery } from "../../../../app/api/school";
import useStyles from "./style";
import startOfWeek from "date-fns/startOfWeek";
import { startOfDay, startOfMonth } from "date-fns";
import startOfYear from "date-fns/startOfYear";
import sub from "date-fns/sub";

const ParticipantPanel = () => {
  const classes = useStyles();
  const { data = [] } = useGetEventAnalyticsQuery();

  const [events, setEvents] = useState(data);

  const initialFilter = {
    class: "all",
    user: "Student",
    category: "all",
    pastDays: "thirty",
  };

  const [option, setOption] = useState(initialFilter);
  const [groupBy, setGroupBy] = useState(0);

  const [labels, datasets] = useMemo(() => {
    const computeEventsData = (events) => {
      const eventMap = new Map();

      events.forEach(({ date, eventType, participantCount }) => {
        let group;

        switch (groupBy) {
          case 0:
            group = format(startOfDay(new Date(date)), "PP");
            break;

          case 1:
            group = format(startOfWeek(new Date(date)), "PP");
            break;

          case 2:
            group = format(startOfMonth(new Date(date)), "LLL, yyyy");
            break;

          case 3:
            group = format(startOfYear(new Date(date)), "yyyy");
            break;
          default:
        }

        if (eventMap.has(group)) {
          const hashedData = eventMap.get(group);

          if (eventType === "competitive") {
            hashedData.competitive += participantCount;
          } else {
            hashedData.nonCompetitive += participantCount;
          }
        } else {
          eventMap.set(group, {
            competitive: eventType === "competitive" ? participantCount : 0,
            nonCompetitive: eventType !== "competitive" ? participantCount : 0,
          });
        }
      });

      const eventList = Array.from(eventMap, ([date, data]) => ({
        date,
        data,
      }));

      if (eventList.length === 1) {
        eventList.unshift({
          date: format(sub(new Date(eventList[0].date), { days: 1 }), "PP"),
          data: {
            competitive: 0,
            nonCompetitive: 0,
          },
        });
      }

      const dates = eventList.map(({ date }) => date);

      let eventDataset = [];

      const competitiveDataset = {
        label: "Competitive Events",
        data: eventList.map(({ data }) => data.competitive),
        backgroundColor: "blue",
        borderColor: "blue",
      };
      const nonCompetitiveDataset = {
        label: "Non-Competitive Events",
        data: eventList.map(({ data }) => data.nonCompetitive),
        backgroundColor: "#F89503",
        borderColor: "#F89503",
      };

      switch (option.category) {
        case "competitive":
          eventDataset.push(competitiveDataset);
          break;

        case "nonCompetitive":
          eventDataset.push(nonCompetitiveDataset);
          break;

        default:
          eventDataset.push(competitiveDataset, nonCompetitiveDataset);
      }

      return [dates, eventDataset];
    };
    return computeEventsData(events);
  }, [events, option.category, groupBy]);

  useEffect(() => {
    if (data) {
      const today = new Date();
      today.setHours(0, 0, 0, 0, 0);

      const pastThirtyDay = sub(today, {
        days: 30,
      });
      console.log(
        "fil",
        data.filter(({ date }) => date >= pastThirtyDay && date <= today)
      );
      setEvents(
        data.filter((event) => {
          const date = new Date(event.date);
          return date >= pastThirtyDay && date <= today;
        })
      );
    }
  }, [data]);

  const chartData = {
    labels,
    datasets,
  };

  defaults.font.size = 16;

  const chartOptions = {
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: "No. of Participants",
          padding: { top: 0, left: 0, right: 0, bottom: 20 },
        },
        min: 0,
      },
    },
    layout: {
      padding: 20,
    },
  };

  return (
    <div className={classes.root}>
      <AnalyticsConfiguration
        option={option}
        setOption={setOption}
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        data={data}
        onChange={setEvents}
      />
      <Line
        className={classes.chart}
        height={100}
        data={chartData}
        options={chartOptions}
      />
    </div>
  );
};

export default ParticipantPanel;
