import React from "react";
import { useGetProfileQuery } from "../../../app/services/hd/school";
import Layout from "../../common/Layout";

const Calendar = () => {
  const { data, isLoading } = useGetProfileQuery();

  return <Layout>Calendar - {isLoading ? "Loading" : data.email}</Layout>;
};

export default Calendar;
