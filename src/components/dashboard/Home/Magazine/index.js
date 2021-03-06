import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import magazineImage from "../../../../assets/svg/magazine-image.png";
import Title from "../../../common/Title";
import useStyles from "./style";

const Magazine = () => {
  const classes = useStyles();
  const superLargeDesktop = useMediaQuery("@media (min-width: 1920px)");

  return (
    <Box className={classes.root}>
      <Title tooltipText="Monthly Magazine">Magazine</Title>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          component="img"
          height={superLargeDesktop ? "340" : "255"}
          image={magazineImage}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.description} component="p">
            Mag description here Mag description here Mag description here Mag
            description here.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            className={classes.actionButtons}
            size="small"
            color="primary"
            variant="outlined"
          >
            Preview
          </Button>
          <Button
            className={classes.actionButtons}
            size="small"
            color="primary"
            variant="outlined"
          >
            Download
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Magazine;
