import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartFull } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Like = ({ liked, onClick }) => {
  let iconType = faHeart;
  if (liked) iconType = faHeartFull;
  return (
    <FontAwesomeIcon
      style={{ cursor: "pointer" }}
      onClick={onClick}
      icon={iconType}
    />
  );
};

export default Like;
