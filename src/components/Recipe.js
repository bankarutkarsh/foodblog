import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Recipe() {
  let { id } = useParams();
  let { foods } = useSelector((state) => state.food);
  let item = foods.find((i) => i.id === parseInt(id));

  return (
    <div>
      <h1 className="text-xxl-center mt-3">{item.name}</h1>
      <center className="d-flex">
        <img
          className="mt-2 ms-5 align-self-start object-fit-cover"
          style={{ height: "25%", width: "25%", objectPosition: "center" }}
          src={item.image}
          alt="Food"
        />
        <div>
          <h1 className="text-start fs-3 ms-3 mt-3 ps-5">Recipe</h1>
          {item.Recipe.map((i) => (
            <p className="text-start ms-3 mt-3 ps-5" key={item.Recipe.index}>
              {i}
            </p>
          ))}
        </div>
      </center>
    </div>
  );
}

export default Recipe;
