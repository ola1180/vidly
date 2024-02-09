import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params);
  console.log(navigate);

  return <WrappedComponent {...props} {...{ params, navigate }} />;
};

export default withRouter;
