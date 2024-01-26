import React from "react";

const ListGroup = ({
  items,
  textProperty,
  valueProperty,
  onGenreSelect,
  selectedGenre,
}) => {
  return (
    <ul className="list-group">
      {items.map((genre) => (
        <li
          onClick={() => {
            onGenreSelect(genre);
          }}
          key={genre[valueProperty]}
          className={
            genre === selectedGenre
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
