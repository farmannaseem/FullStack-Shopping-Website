import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const ProductDetails = ({ onAddToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    onAddToCart({ ...product, quantity });
  };

  if (loading) {
    return (
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container text-center py-5">
        <h2>Product not found</h2>
        <Link to="/products" className="btn btn-primary mt-3">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="card border-0 shadow-sm">
            <div className="row g-0">
              <div className="col-md-5">
                <div className="p-4 d-flex align-items-center justify-content-center h-100 bg-light">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="img-fluid product-img"
                    style={{
                      maxHeight: "400px",
                      objectFit: "contain",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                  />
                </div>
              </div>
              
              <div className="col-md-7">
                <div className="card-body p-4">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <Link to="/products" className="text-decoration-none">Products</Link>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        {product.category}
                      </li>
                    </ol>
                  </nav>

                  <h2 className="card-title mb-3">{product.title}</h2>
                  
                  <div className="mb-3">
                    <span className="badge bg-primary me-2">{product.category}</span>
                    <span className="h4 mb-0">${product.price}</span>
                  </div>

                  <p className="card-text text-muted mb-4">{product.description}</p>

                  <div className="d-flex align-items-center mb-4">
                    <div className="input-group me-3" style={{ width: "130px" }}>
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      >
                        <i className="bi bi-dash"></i>
                      </button>
                      <input
                        type="number"
                        className="form-control text-center"
                        value={quantity}
                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                        min="1"
                      />
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <i className="bi bi-plus"></i>
                      </button>
                    </div>
                  </div>

                  <div className="d-grid gap-2 d-md-flex">
                    <button
                      className="btn btn-primary btn-lg px-4 me-md-2"
                      onClick={handleAddToCart}
                    >
                      <i className="bi bi-cart-plus me-2"></i>
                      Add to Cart
                    </button>
                    <button className="btn btn-outline-primary btn-lg px-4">
                      <i className="bi bi-lightning me-2"></i>
                      Buy Now
                    </button>
                  </div>

                  <div className="mt-4">
                    <div className="d-flex align-items-center text-muted mb-2">
                      <i className="bi bi-truck me-2"></i>
                      Free shipping worldwide
                    </div>
                    <div className="d-flex align-items-center text-muted mb-2">
                      <i className="bi bi-shield-check me-2"></i>
                      2 year warranty
                    </div>
                    <div className="d-flex align-items-center text-muted">
                      <i className="bi bi-arrow-return-left me-2"></i>
                      30-day return policy
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
