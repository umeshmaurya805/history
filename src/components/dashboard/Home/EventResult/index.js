import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ResultCard from "../../../card/ResultCard";
import Title from "../../../common/Title/index";
import Dropdown from "../../../common/Dropdown";
import { useGetEventResultsQuery } from "../../../../app/api/events";
import useStyles from "./style";
import TeamResultCard from "../../../card/TeamResultCard";

const EventResult = () => {
  const classes = useStyles();
  const { data = [] } = useGetEventResultsQuery();

  const [selectedEvent, setSelectedEvent] = useState(0);
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [isTeamEvent, setIsTeamEvent] = useState(false);
  const [hasThemes, setHasThemes] = useState(false);

  const handleEventChange = (e) => {
    const { value } = e.target;
    setSelectedEvent(value);
    setSelectedTheme(0);
    setHasThemes(data[value].hasThemes);
    setIsTeamEvent(data[value].isTeamEvent);
  };

  const showResult = (results) => {
    if (isTeamEvent) {
      return results?.map((teamData, index) => {
        return (
          <Grid key={index} item style={{ flexGrow: 1 }}>
            <TeamResultCard info={teamData} />
          </Grid>
        );
      });
    } else {
      return results?.map((studentData, index) => {
        return (
          <Grid key={index} item style={{ flexGrow: 1 }}>
            <ResultCard info={studentData} />
          </Grid>
        );
      });
    }
  };

  return data ? (
    <div className={classes.root}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Title tooltipText="Results of past 5 competitions">Results</Title>
        </Grid>
        <Grid item className={classes.selector}>
          {hasThemes && (
            <Dropdown
              value={selectedTheme}
              items={data[selectedEvent]?.themes.map(({ theme }) => theme)}
              handleChange={(e) => setSelectedTheme(e.target.value)}
              classes={{ select: classes.selectTheme }}
            />
          )}
          <Dropdown
            value={selectedEvent}
            items={data.map(({ title }) => title)}
            handleChange={handleEventChange}
            classes={{ select: classes.selectEvent }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.resultContainer}>
        {hasThemes
          ? showResult(data[selectedEvent]?.themes[selectedTheme]?.results)
          : showResult(data[selectedEvent]?.results)}
      </Grid>
    </div>
  ) : null;
};

export default EventResult;
