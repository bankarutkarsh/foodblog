import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Details() {
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
        <div className="mt-3  ms-2 text-start">
        <p ><strong >Description:</strong>   {item.description}</p>
        <p ><strong >Type:</strong>   {item.type}</p>
        <p ><strong >Good for:</strong>   {item.goodFor}</p>
        <p ><strong >Reviews:</strong>   {item.reviews}</p>
        <p><strong >Price:</strong>   {item.price}</p>
        </div>
        
      </center>
    </div>
  );
}

export default Details;
