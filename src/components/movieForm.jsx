import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <h1>Movie Form {id}</h1>
      <button className="btn btn-primary" onClick={() => navigate("/movies")}>
        Save
      </button>
    </>
  );
};

export default MovieForm;
