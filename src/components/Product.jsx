import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Product = () => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setproduct(response);
        console.log(response);
      });
  }, []);
  const productfilter = product.filter((title) => {
    return title.price > 20 && title.price < 100;
  });
  return (
    <div className="container">
      <div className="row">
        {productfilter.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-lg my-3 pe-auto" role="button">
              <Link to={`/ProductDetails/${product.id}`} style={{textDecoration:"none"}}>
                <img
                  src={product.image}
                  className="card-img-top my-2"
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text text-success">
                    <strong>${product.price}</strong>
                  </p>
                  <p className="card-text">
                    {product.description.substring(0, 100)}...
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Product ID: {product.id}</small>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
