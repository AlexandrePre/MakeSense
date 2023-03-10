/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "./authContext";

function ProtectedRoute({ children }) {
  const { auth } = useContext(authContext);

  if (!auth.data) {
    return <Navigate to="/" state="Unauthorized" />;
  }

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.any.isRequired,
};

export default ProtectedRoute;
