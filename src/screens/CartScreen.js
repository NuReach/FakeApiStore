import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../components/Nav";
import { Store } from "../Store";

function CartScreen() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: "ORDER",
      payload: { name, phone, address },
    });
    navigate("/receipt");
  };

  return (
    <div>
      <Nav />
      <div className=" w-screen flex justify-center items-center h-screen">
        <div className=" w-fit  border rounded-lg p-9 ">
          {cart.cartItems.map((item, i) => {
            return (
              <div
                key={i}
                className=" my-6 border-b-2 p-3 flex justify-between items-center space-x-9"
              >
                <img src={item.img} alt="" className="w-16 h-16" />
                <p className="w-48 truncate">{item.title}</p>
                <p className=" font-bold">
                  {item.price * item.qty.toFixed(2)}$
                </p>
                <p>x{item.qty}</p>
                <div
                  className=" cursor-pointer"
                  onClick={() => {
                    ctxDispatch({ type: "REMOVE", payload: item.id });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-4h2V8H9Zm4 0h2V8h-2Z"
                    />
                  </svg>
                </div>
              </div>
            );
          })}
          <p className=" mb-3 font-bold text-lg">
            TOTAL :{" "}
            {cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0).toFixed(2)}{" "}
            $
          </p>
          <button
            className=" w-36 bg-slate-300 rounded-lg"
            onClick={() => {
              navigate("/");
            }}
          >
            Add{" "}
          </button>
        </div>
        <div className=" flex flex-col justify-center items-center border rounded-lg ml-9 w-fit px-9">
          <p className=" font-semibold p-3 text-3xl">Your information</p>
          <form onSubmit={handleSubmit} className="p-6 flex flex-col space-y-6">
            <input
              className="p-3 border rounded-lg focus:outline-gray-500"
              type="text"
              placeholder="Full Name..."
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="p-3 border rounded-lg focus:outline-gray-500"
              type="text"
              placeholder="Phone..."
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="p-3 border rounded-lg focus:outline-gray-500"
              type="text"
              placeholder="Address..."
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              type="submit"
              name=""
              id=""
              className=" w-36 bg-slate-300 rounded-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default CartScreen;
