import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ path, name }) => {
  const navigate = useNavigate();
  return (
    <button className="btn btn-primary" onClick={() => navigate(`/${path}`)}>
      {name}
    </button>
  );
};

export default NavigateButton;
