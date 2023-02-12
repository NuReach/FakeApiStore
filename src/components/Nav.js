import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Store } from "../Store";

function Nav() {
  const { state } = useContext(Store);
  const { cart } = state;
  return (
    <div className=" w-screen flex justify-between items-center px-6 border-b-2">
      <div>
        <img
          src="https://media.istockphoto.com/id/1253259417/vector/convenience-store-pixel-perfect-linear-icon-grocery-shop-exterior-small-business-in-retail.jpg?s=612x612&w=0&k=20&c=gtYLtJ-W6rl3_v9JeOphfWw7D9yJF9zXFLu5fYgoVJA="
          alt=""
          className="w-20 h-20"
        />
      </div>
      <div className="flex space-x-6 font-bold text-xl">
        <Link to={`/category/men's clothing`}> Men </Link>
        <Link to={`/category/women's clothing`}> Women </Link>
        <Link to={`/category/electronics`}> Electonic </Link>
        <Link to={`/category/jewelery`}> Jewelery </Link>
      </div>
      <Link to={`/cart`} className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607L1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4a2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"
          />
        </svg>
        <p className="absolute -top-3 right-0 bg-green-200 p-1 rounded-full">
          {cart.cartItems.length}
        </p>
      </Link>
    </div>
  );
}

export default Nav;
