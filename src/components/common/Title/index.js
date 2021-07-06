import React from 'react'
import Typography from "@material-ui/core/Typography";
import InfoButton from "../../button/InfoButton";
import useStyles from './style';

const Title = ({tooltipText, children}) => {
    const classes = useStyles();

    return (
        <Typography className={classes.root}>
        {children}
        <InfoButton
          position="right-end"
          text= {tooltipText}
        />
      </Typography>
    )
}

export default Title
