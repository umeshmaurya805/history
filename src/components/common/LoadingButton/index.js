import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingButton = ({ isLoading, children, ...props }) => {
  return (
    <Button {...props}>
      {isLoading ? <CircularProgress color="secondary" /> : children}
    </Button>
  );
};

export default LoadingButton;
