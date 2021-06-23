import React from "react";
import { useGetProfileQuery } from "../../../app/services/hd/school";
import Layout from "../../common/Layout";

const Home = () => {
  const { data, isLoading } = useGetProfileQuery();

  return <Layout>Home - {isLoading ? "Loading" : data.email}</Layout>;
};

export default Home;
