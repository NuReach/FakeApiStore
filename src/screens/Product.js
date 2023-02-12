import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";
import Nav from "../components/Nav";
import { Store } from "../Store";

function Product() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [rate, setRate] = useState();
  const [count, setCount] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [qty, setQty] = useState(1);
  const { dispatch: ctxDisptach } = useContext(Store);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setLoading(true);
      setTitle(data.title);
      setCategory(data.category);
      setImg(data.image);
      setRate(data.rating.rate);
      setCount(data.rating.count);
      setPrice(data.price);
      setDescription(data.description);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Nav />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <div className="w-1/3 mr-3">
            <img src={img} alt="" />
          </div>
          <div className=" w-1/3 space-y-3">
            <div>{title}</div>
            <div>Price :{price}$</div>
            <div>Description :{description}</div>
            <div>Category :{category}</div>
            <div>Review :{count} reviews</div>
            <div>Rate :{rate} </div>
            <div className="flex">
              <button
                className=" bg-gray-600 rounded-l-lg w-9 text-white"
                disabled={qty < 1}
                onClick={() => {
                  setQty(qty - 1);
                }}
              >
                -
              </button>
              <div className="border w-6 flex justify-center items-center">
                <p>{qty}</p>
              </div>
              <button
                className=" bg-gray-600 rounded-r-lg w-9 text-white "
                onClick={() => {
                  setQty(qty + 1);
                }}
              >
                +
              </button>
            </div>
            <button
              className=" w-36 bg-gray-600 rounded-lg text-white"
              onClick={(e) => {
                e.preventDefault();
                ctxDisptach({
                  type: "ADD_TO_CART",
                  payload: {
                    id,
                    title,
                    category,
                    img,
                    rate,
                    count,
                    price,
                    description,
                    qty,
                  },
                });
                navigate("/");
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
