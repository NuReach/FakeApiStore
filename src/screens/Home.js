import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import Card from "../components/Card";
import LoadingSpinner from "../components/LoadingSpinner";
import Nav from "../components/Nav";

function Home() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);

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

export default Home;
