import React from "react";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const ChoiceSelectButton = ({ values, onClick, selectedIndex, styles }) => {
  return (
    <Box className={styles.root}>
      {values.map((value, index) => {
        return (
          <Button
            key={index}
            variant={selectedIndex === index ? "contained" : "outlined"}
            color={selectedIndex === index ? "primary" : undefined}
            className={styles.button}
            onClick={() => onClick(index)}
          >
            {value}
          </Button>
        );
      })}
    </Box>
  );
};

export default ChoiceSelectButton;
