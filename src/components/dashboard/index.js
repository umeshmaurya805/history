import React from "react";
import styled from "styled-components";
import cx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import {
  Root,
  getHeader,
  getDrawerSidebar,
  getSidebarTrigger,
  getSidebarContent,
  getCollapseBtn,
  getContent,
  getFooter,
  getFixedScheme,
} from "@mui-treasury/layout";
import {
  HeaderMockUp,
  ContentMockUp,
  FooterMockUp,
  // NavContentMockUp,
} from "@mui-treasury/mockup/layout";
import { TextSidebar } from '@mui-treasury/mockup/sidebars';
import useStyles from "./style";

const Header = getHeader(styled);
const DrawerSidebar = getDrawerSidebar(styled);
const SidebarTrigger = getSidebarTrigger(styled);
const SidebarContent = getSidebarContent(styled);
const CollapseBtn = getCollapseBtn(styled);
const Content = getContent(styled);
const Footer = getFooter(styled);

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
        {/* <ContentMockUp /> */}
      </Content>
    </Root>
  );
};

export default Dashboard;
