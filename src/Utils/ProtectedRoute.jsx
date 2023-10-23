import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom";
import LoadingScreen from "../Components/LoadingScreen";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    if (!user.isAuthenticated && !user.pending) navigate("/");
  }, []);

  return user.isAuthenticated && !user.pending ? (
    <Route {...rest} element={<Component />} />
  ) : (
    <LoadingScreen />
  );
};

export default ProtectedRoute;
