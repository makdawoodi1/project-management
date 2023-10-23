import React from "react";
import { Route, useNavigate } from "react-router-dom";

const FreeRoute = ({ component: Component, ...rest }) => {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) navigate("/boards")
  return <Route {...rest} element={<Component />} />;
};

export default FreeRoute;
