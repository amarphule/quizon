import React from "react";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

const Categories = ({ category }) => {
  const navigate = useNavigate();
  const { image, name, description } = category;
  const chosenQue = (name) => {
    sessionStorage.setItem("name", name);
    navigate("/rules");
  };
  return (
    <div onClick={() => chosenQue(name)} className="card card-vertical">
      <img src={image} alt={name} />
      <div className="card-details">
        <div className="title">{name}</div>
        <div className="subTitle">{description}</div>
      </div>
    </div>
  );
};

export { Categories };
