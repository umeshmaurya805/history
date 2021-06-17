import Button from "@material-ui/core/Button";
import React from "react";
import { useHistory } from "react-router-dom";
import { useLogoutMutation } from "../../app/services/hd/auth";
import { useGetProfileQuery } from "../../app/services/hd/school";
import protectedHandler from "../../utils/protectedHandler";
import { removeSchoolAuth } from "../../utils/schoolAuth";

const Dashboard = () => {
  const [logout] = useLogoutMutation();
  const { data, isLoading } = useGetProfileQuery();
  const history = useHistory();

  const logoutSchool = protectedHandler(async () => {
    await logout().unwrap();
    removeSchoolAuth();
    history.push("/auth/login");
  });

  return (
    <div>
      <Button variant="contained" color="primary" onClick={logoutSchool}>
        Logout
      </Button>
      {isLoading ? "Loading" : data.email}
    </div>
  );
};

export default Dashboard;
