import React from "react";
import Typography from "@material-ui/core/Typography";
import useStyles from "./styles";

const NewFeature = ({ title, image, description, link, ...rest }) => {
  const classes = useStyles();

  return (
    <div {...rest}>
      {image ? (
        <img src={image} alt={title} className={classes.image} />
      ) : (
        <Typography variant="h5" className={classes.title}>
          {title}
        </Typography>
      )}
      <Typography variant="subtitle1" className={classes.description}>
        {description}
      </Typography>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className={classes.learnMore}
      >
        Learn More <span>→</span>
      </a>
    </div>
  );
};

export default NewFeature;
