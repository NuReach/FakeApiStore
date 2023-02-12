import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import LoadingSpinner from "./LoadingSpinner";
import Nav from "./Nav";

function Category() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const { category } = useParams();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://fakestoreapi.com/products/category/${category}`
      );
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, [category]);

  return (
    <div>
      <Nav />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="p-9 flex flex-wrap justify-center items-center">
          {data.map((item, i) => {
            return (
              <div key={i}>
                {" "}
                <Card item={item} />
              </div>
            );
          })}{" "}
        </div>
      )}
    </div>
  );
}

export default Category;
