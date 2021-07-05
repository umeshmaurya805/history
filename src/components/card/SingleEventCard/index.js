import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import useStyles from "./style";

const SingleEventCard = ({ data }) => {
  const classes = useStyles();
  const isAdVisible = true;
  const isMobileScreen = useMediaQuery("(max-width:700px)");
  const showOneImageOnAd = useMediaQuery(
    "(max-width:1500px) && (min-width:700px)"
  );

  const { title, subHeading, images, date, time, forClass } = data;

  return (
    <Card className={classes.root}>
      <Container className={classes.content}>
        <Box display="flex" alignItems="center" flexDirection="column">
          <Typography variant="h4" className={classes.title} gutterBottom>
            {title}
          </Typography>
          <Typography
            display="block"
            variant="body2"
            className={classes.subHeading}
          >
            {subHeading}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-evenly"
            className={classes.imageContainer}
          >
          {console.log(showOneImageOnAd)}
            {isMobileScreen || (isAdVisible && showOneImageOnAd) ? (
              <img src={images[0]} alt="" className={classes.image} />
            ) : (
              images.map((image, index) => (
                <img key={index} src={image} alt="" className={classes.image} />
              ))
            )}
          </Box>
          <Box display="flex" alignItems="center" className={classes.infoBox}>
            <Grid container justify="space-evenly">
              <Box className={classes.innerBox}>
                <Typography color="primary" className={classes.infoLabel}>
                  Date
                </Typography>
                <Typography className={classes.infoValue}>{date}</Typography>
              </Box>
              <Box className={classes.innerBox}>
                <Typography color="primary" className={classes.infoLabel}>
                  Time
                </Typography>
                <Typography className={classes.infoValue}>{time}</Typography>
              </Box>
              <Box className={classes.innerBox}>
                <Typography color="primary" className={classes.infoLabel}>
                  Class
                </Typography>
                <Typography className={classes.infoValue}>
                  {forClass}
                </Typography>
              </Box>
            </Grid>
            <Button
              className={classes.detailsButton}
              size="small"
              color="primary"
              variant="outlined"
            >
              View Details
            </Button>
          </Box>
        </Box>
      </Container>
    </Card>
  );
};

export default SingleEventCard;
