import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();

  const handlingpage=()=>{
    navigate('./Product');
  }
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-center"
    style={{
        backgroundImage: `url('Background-image.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
      <div>
        <h1 className="">Shopping Seamless With Our Website</h1>
        <button className="btn btn-primary my-3"onClick={handlingpage}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default MainLayout;
