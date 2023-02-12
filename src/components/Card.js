import React from "react";
import { useNavigate } from "react-router-dom";

function Card({ item }) {
  const navigate = useNavigate();
  const detail = (e) => {
    e.preventDefault();
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="border rounded-lg  w-60 p-3 mx-12 mb-9" onClick={detail}>
      <div>
        <img src={item.image} alt="" className=" w-full h-60" />
      </div>
      <div>
        <div className="border-t-2 mt-3">
          <p className=" truncate">{item.title}</p>
        </div>
        <div>
          <p>Price:{item.price}$</p>
        </div>
        <div className="border-b-2">
          <p>Category:{item.category}</p>
        </div>
        <button
          className=" bg-slate-500 w-24 rounded-r-lg mt-3 "
          onClick={detail}
        >
          Detail
        </button>
      </div>
    </div>
  );
}

export default Card;
