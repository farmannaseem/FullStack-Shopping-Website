import { useState } from "react";

const Footer = () => {
  const [inputvalue,setinputvalue]=useState('');
  const [error, setError] = useState('');


  const handleinput = (e) =>{
    const update =e.target.value;
    setinputvalue(update);


    if(inputvalue.trim('')){
      setError('input is required')
    }else{
      setError('not sucess');
    }
  }
  const handlesubmit =(e)=>{
    e.preventDefault();
    if(!error){

    }
  }
  return (
    <div className="container">
      <div className=" row justify-content-center">
        <h1 className="text-center">Want to Contact Us ?</h1>
        <form onSubmit={handlesubmit} className="card col-md-5">
          <input
            type="text"
            placeholder="Enter An Mail"
            className="m-3 rounded-1"
          ></input>
          <input
            type="text"
            placeholder="Password"
            className="m-3 rounded-1"
            value={inputvalue}
            onChange={handleinput}
          ></input>
          {error &&<strong>{error}</strong>} 
          <button className="btn btn-primary" onSubmit={handleinput}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
