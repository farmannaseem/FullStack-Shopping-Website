import React, { useState } from "react";
import { useEffect } from "react";
import {  useParams } from "react-router-dom";
const ProductDetails = ({onAddToCart}) => {
  const { id } = useParams();
  const [single, setSingle] = useState("");

  const addtocart=()=>{
   onAddToCart(single);
  }
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
        {single && (
          <>
          <h3>Product:{single.title}</h3>
        <img src={single.image} alt={single.title} style={{ width: "20%" }} />
        <i>Product:{single.description}</i>
        <h3>Product:{single.id}</h3>
        <div>
          <button type="button" className="btn btn-primary" onClick={addtocart}>Add To Cart</button>
        </div>
        <button className="btn btn-primary">Buy Now</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
