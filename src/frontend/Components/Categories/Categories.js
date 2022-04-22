import React from "react";
import "./Categories.css";

const Categories = ({ category }) => {
  const { _id, categoryName, image, name, description } = category;
  return (
    <div className="card card-vertical">
      <img src={image} alt={name} />
      <div className="card-details">
        <div className="title">{name}</div>
        <div className="subTitle">{description}</div>
      </div>
    </div>
  );
};

export default Categories;
