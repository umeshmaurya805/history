import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import magazineImage from "../../../../assets/svg/magazine-image.png";
import useStyles from "./style";

const Magazine = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        component="img"
        height="240"
        image={magazineImage}
      />
      <CardContent>
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
  );
};

export default Magazine;
