import React, { useEffect, useMemo, useState } from "react";
import { Line, defaults } from "react-chartjs-2";
import format from "date-fns/format";
import AnalyticsConfiguration from "../../../config/AnalyticsConfiguration";
import { useGetEventAnalyticsQuery } from "../../../../app/api/school";
import useStyles from "./style";

const ParticipantPanel = () => {
  const classes = useStyles();
  const { data = [] } = useGetEventAnalyticsQuery();
  const [events, setEvents] = useState(data);

  const initialFilter = {
    class: "all",
    user: "Student",
    category: "all",
    pastDays: "seven",
  };

  const [option, setOption] = useState(initialFilter);
  const [groupBy, setGroupBy] = useState(0);

  const [labels, datasets] = useMemo(() => {
    const computeEventsData = () => {
      const eventMap = new Map();

      const events = [
        {
          date: "21/4/2000",
          eventType: "competitive",
          participantCount: 100,
        },
        {
          date: "22/4/2000",
          eventType: "competitive",
          participantCount: 411,
        },
        {
          date: "25/4/2000",
          eventType: "competitive",
          participantCount: 575,
        },
        {
          date: "30/4/2000",
          eventType: "competitive",
          participantCount: 77,
        },
        {
          date: "1/5/2000",
          eventType: "competitive",
          participantCount: 12,
        },
        {
          date: "5/5/2000",
          eventType: "competitive",
          participantCount: 75,
        },
      ];

      events.forEach(({ date, eventType, participantCount }) => {
let group;

switch(groupBy) {
  case 0:
    // group = 
break;
  default:
}

        if (eventMap.has(date)) {
          const hashedData = eventMap.get(date);

          if (eventType === "competitive") {
            hashedData.competitive += participantCount;
          } else {
            hashedData.nonCompetitive += participantCount;
          }
        } else {
          eventMap.set(date, {
            competitive: eventType === "competitive" ? participantCount : 0,
            nonCompetitive: eventType !== "competitive" ? participantCount : 0,
          });
        }
      });
      console.log(eventMap);
      const dates = [
        format(new Date(2021, 6, 23), "PP"),
        format(new Date(2021, 6, 24), "PP"),
        format(new Date(2021, 6, 25), "PP"),
        format(new Date(2021, 6, 26), "PP"),
        format(new Date(2021, 6, 27), "PP"),
        format(new Date(2021, 6, 28), "PP"),
        format(new Date(2021, 6, 29), "PP"),
      ];
      let eventDataset = [];

      const competitiveDataset = {
        label: "Competitive Events",
        // data: competitiveData,
        backgroundColor: "blue",
        borderColor: "blue",
      };
      const nonCompetitiveDataset = {
        label: "Non-Competitive Events",
        // data: nonCompetitiveData,
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
  }, [events, option.category]);

  // console.log(labels, datasets);

  useEffect(() => {
    if (data) {
      setEvents(data);
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
