import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const LoadingIconButton = ({
  isLoading,
  icon,
  children,
  loaderColor = "white",
  ...props
}) => {
  return (
    <Button
      {...props}
      startIcon={
        isLoading ? (
          <CircularProgress
            style={{ height: 15, width: 15, color: loaderColor }}
          />
        ) : (
          icon
        )
      }
    >
      {children}
    </Button>
  );
};

export default LoadingIconButton;
