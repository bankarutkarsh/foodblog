import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Recipe() {
  let { id } = useParams();
  let {foods} = useSelector((state)=> state.food)
  let item = foods.find((i)=> i.id === parseInt(id));

  return <div>{item.name}</div>;
}

export default Recipe;
