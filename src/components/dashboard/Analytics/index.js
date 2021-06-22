import React from "react";
import { useHistory } from "react-router-dom";
import LoadingButton from "../../common/LoadingButton";
import { useLogoutMutation } from "../../../app/services/hd/auth";
import { useGetProfileQuery } from "../../../app/services/hd/school";
import protectedHandler from "../../../utils/protectedHandler";
import { removeSchoolAuth } from "../../../utils/schoolAuth";

const Analytics = () => {
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();
  const { data, isLoading } = useGetProfileQuery();
  const history = useHistory();

  const logoutSchool = protectedHandler(async () => {
    await logout().unwrap();
    removeSchoolAuth();
    history.push("/auth/login");
  });

  return (
    <div>
      <LoadingButton
        variant="contained"
        color="primary"
        onClick={logoutSchool}
        isLoading={isLoggingOut}
      >
        Logout
      </LoadingButton>
      Analytics
      {isLoading ? "Loading" : data.email}
    </div>
  );
};

export default Analytics;
