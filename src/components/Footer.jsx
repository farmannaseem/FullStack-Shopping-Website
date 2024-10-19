import React from "react";

const Footer = () => {
  return (
    <div className="container">
      <div className=" row justify-content-center">
        <h1 className="text-center">Want to Contact Us ?</h1>
        <form action="submit" className="card col-md-5">
          <input type="text" placeholder="Enter An Mail" className="m-3 rounded-1"></input>
          <input type="text" placeholder="Password" className="m-3 rounded-1"></input>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
