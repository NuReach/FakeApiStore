import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Store } from "../Store";

function Receipt() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { cart } = state;
  const navigate = useNavigate();

  const submit = () => {
    ctxDispatch({ type: "SUBMIT" });
    navigate("/");
  };
  return (
    <div className=" w-screen h-screen flex justify-center items-center">
      <div className=" border-2 rounded-lg w-96 p-9">
        <p className=" font-bold border-b-2">Receipt</p>
        <div className=" border-b-2">
          <p>Name : {cart.userInfo.name}</p>
          <p>Phone : {cart.userInfo.phone}</p>
          <p>Address : {cart.userInfo.address}</p>
        </div>
        <div className="border-b-2">
          {cart.cartItems.map((item) => {
            return (
              <div className="flex justify-between ">
                <p className="truncate w-1/2">{item.title}</p>
                <p>x{item.qty}</p>
              </div>
            );
          })}
        </div>
        <div>
          <p>
            TOTAL :{" "}
            {cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0).toFixed(2)}{" "}
            $
          </p>
          <button
            className=" w-36 bg-slate-300 rounded-lg my-3"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Receipt;
