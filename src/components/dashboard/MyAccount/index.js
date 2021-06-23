import React from "react";
import { useGetProfileQuery } from "../../../app/services/hd/school";
import Layout from "../../common/Layout";

const MyAccount = () => {
  const { data, isLoading } = useGetProfileQuery();

  return <Layout>My Account - {isLoading ? "Loading" : data.email}</Layout>;
};

export default MyAccount;
