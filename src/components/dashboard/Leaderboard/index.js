import React from "react";
import { useGetProfileQuery } from "../../../app/services/hd/school";
import Layout from "../../common/Layout";

const Leaderboard = () => {
  const { data, isLoading } = useGetProfileQuery();

  return <Layout>Leaderboard - {isLoading ? "Loading" : data.email}</Layout>;
};

export default Leaderboard;
