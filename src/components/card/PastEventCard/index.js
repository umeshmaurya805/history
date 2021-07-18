import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { toast } from "react-toastify";
import format from "date-fns/format";
import InfoChip from "../../common/InfoChip";
import useStyles from "./style";

const PastEventCard = ({ competitive }) => {
  const classes = useStyles();
  const title = "If You were (Monologue competition)";

  const handlePdfDownload = () => {
    toast.success("PDF Downloaded", { toastId: "pdf" });
  };

  const list = [
    ["Conducted On: ", format(new Date(), "PP")],
    ["Classes: ", "9 - 12"],
    ["Points Gained: ", 30],
    ["Students Participated: ", 1221],
    ["Schools Participated: ", 101],
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" color="primary" className={classes.title}>
        Event Details
      </Typography>
      <Card>
        <CardContent className={classes.content}>
          <Typography
            variant="h6"
            color="primary"
            className={classes.eventName}
          >
            {title}
          </Typography>
          <Grid container>
            <Grid item>
              <Grid container className={classes.chips}>
                {list.map((item, index) => {
                  return (
                    (competitive || index !== 2) && (
                      <Grid key={index} item style={{ flexGrow: 1 }}>
                        <InfoChip
                          name={item[0]}
                          value={item[1]}
                          classes={
                            competitive
                              ? {}
                              : { root: classes.competitiveInfoChip }
                          }
                        />
                      </Grid>
                    )
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            endIcon={<Icon>download</Icon>}
            onClick={(e) => handlePdfDownload()}
          >
            PDF
          </Button>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};

export default PastEventCard;
