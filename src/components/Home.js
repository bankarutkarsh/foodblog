import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFoodsData } from "../redux/food.slice";
import '../css/home.css'
import { useNavigate } from "react-router-dom";

function Home() {
  let dispatch = useDispatch();
  let { foods } = useSelector((state) => state.food);
  useEffect(() => {
    dispatch(getFoodsData(null));
  }, [dispatch]);

  let navigate = useNavigate();

  return (
    <div>
      <h1 className="my-3 pb-5 text-xxl-center">Menu</h1>
      <center>
        <div className="w-75 mx-5 contain d-flex flex-wrap">
          {foods.map((i) => (
            <div key={i.id} className="d-flex item p-3 border-bottom h-25">
              <img
                onClick={() => navigate(`/Details/${i.id}`)}
                src={i.image}
                alt={i.name}
              />
              <div onClick={() => navigate(`/Details/${i.id}`)} className="px-1 w-75 text-start">
                <h2 className="fs-4 fw-semibold">{i.name}</h2>
                <p className="text-secondary">{i.description}</p>
              </div>
              <div className="price">
              <h2 className="px-1 fs-4">{i.price}</h2>
              <button onClick={() =>  navigate(`/Recipe/${i.id}`)} type="button" className="btn btn-danger">Recipe</button>
              </div>
            </div>
          ))}
        </div>
      </center>
    </div>
  );
}

export default Home;
