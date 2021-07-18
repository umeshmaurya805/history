import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useStyles from "./style";
import { useHistory } from "react-router-dom";
import { format } from "date-fns";

const EventCardLarge = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();

  const { title, summary, image, startDate, forClass, slug } = data;

  return (
    <div className={classes.root}>
      <Card>
        <Container className={classes.content}>
          <Grid container spacing={2}>
            <Grid item sm={6} className={classes.imageContainer}>
              <img src={image} alt="" className={classes.image} />
            </Grid>
            <Grid item sm={6}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                style={{ height: "100%" }}
              >
                <Typography variant="h4" className={classes.title} gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" className={classes.summary}>
                  {summary}
                </Typography>
                <Box
                  display="flex"
                  alignItems="center"
                  className={classes.infoBox}
                >
                  <Grid container justifyContent="space-evenly">
                    <Box className={classes.innerBox}>
                      <Typography color="primary" className={classes.infoLabel}>
                        Date
                      </Typography>
                      <Typography className={classes.infoValue}>
                        {format(startDate, "PP")}
                      </Typography>
                    </Box>
                    <Box className={classes.innerBox}>
                      <Typography color="primary" className={classes.infoLabel}>
                        Time
                      </Typography>
                      <Typography className={classes.infoValue}>
                        {format(startDate, "p")}
                      </Typography>
                    </Box>
                    <Box className={classes.innerBox}>
                      <Typography color="primary" className={classes.infoLabel}>
                        Class
                      </Typography>
                      <Typography className={classes.infoValue}>
                        {`${forClass.from} - ${forClass.to}`}
                      </Typography>
                    </Box>
                  </Grid>
                </Box>
                <Button
                  className={classes.detailsButton}
                  size="small"
                  color="primary"
                  variant="outlined"
                  onClick={() => history.push(`/dashboard/calendar/${slug}`)}
                >
                  View Details
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Card>
    </div>
  );
};

export default EventCardLarge;
