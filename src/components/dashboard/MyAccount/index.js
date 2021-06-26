import React from "react";
import Layout from "../../common/Layout";
import TabLayout from "../../common/TabLayout";
import AccountSettingsPanel from "./AccountSettingsPanel";
import CreditPanel from "./CreditPanel";
import SupportPanel from "./SupportPanel";

const MyAccount = () => {
  const labels = ["Account Settings", "Credit", "Support"];
  const panels = [AccountSettingsPanel, CreditPanel, SupportPanel];

  return (
    <Layout>
      <TabLayout labels={labels} panels={panels} />
    </Layout>
  );
};

export default MyAccount;
