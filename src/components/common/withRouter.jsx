import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  return <WrappedComponent {...props} {...{ params, navigate, location }} />;
};

export default withRouter;
