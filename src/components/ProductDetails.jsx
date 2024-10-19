import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { id } = useParams();
  const [single, setSingle] = useState("");
  useEffect(() => { 
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((Response) => {
        return Response.json();
      })
      .then((data) => {
        setSingle(data);
      });
  }, []);

  return (
    <div className="card container col-7">
      <div className="row justify-content-center">
        <h1  className="card">ProductDetails</h1>
        <h3>Product:{single.title}</h3>
        <img src={single.image} alt={single.title} style={{ width: "20%" }} />
        <i>Product:{single.description}</i>
        <h3>Product:{single.id}</h3>
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  );
};

export default ProductDetails;
