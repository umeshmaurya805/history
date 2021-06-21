import React from "react";
import styled from "styled-components";
import cx from "clsx";
import {
  Root,
  getDrawerSidebar,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFixedScheme,
} from "@mui-treasury/layout";
import { TextSidebar } from '@mui-treasury/mockup/sidebars';
import useStyles from "./style";

const DrawerSidebar = getDrawerSidebar(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);

const fixedScheme = getFixedScheme();

const Dashboard = () => {
  const styles = useStyles();

  return (
    <Root scheme={fixedScheme}>
      <DrawerSidebar
        sidebarId={"primarySidebar"}
        PaperProps={{ className: styles.sidebar }}
      >
        <SidebarContent>
          <TextSidebar />
        </SidebarContent>
        <CollapseBtn className={cx(styles.collapseBtn)} />
      </DrawerSidebar>
      <Content className={styles.content}>
      </Content>
    </Root>
  );
};

export default Dashboard;
