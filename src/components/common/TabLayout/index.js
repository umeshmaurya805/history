import React, { useState } from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import { StyledTabs, StyledTab } from "./style";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TabLayout = ({ labels, panels, ...props }) => {
  const [value, setValue] = useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div {...props}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        variant="fullWidth"
        aria-label="Tab Layout"
      >
        {labels.map((title, index) => {
          return <StyledTab key={index} label={title} {...a11yProps(index)} />;
        })}
      </StyledTabs>

      {panels.map((Panel, index) => {
        return (
          <TabPanel key={index} value={value} index={index}>
            <Panel setActivePanel={(activePanelValue) => setValue(activePanelValue)} />
          </TabPanel>
        );
      })}
    </div>
  );
};

export default TabLayout;
