import React from "react";
import { useGetProfileQuery } from "../../../app/services/hd/school";
import Layout from "../../common/Layout";

const Analytics = () => {
  const { data, isLoading } = useGetProfileQuery();

  return <Layout>Analytics - {isLoading ? "Loading" : data.email}</Layout>;
};

export default Analytics;
