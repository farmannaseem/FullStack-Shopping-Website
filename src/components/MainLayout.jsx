import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainLayout = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  const backgrounds = [
    'url("https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070")',
    'url("https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=2070")',
    'url("https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070")',
    'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070")',
    'url("https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070")',
  ];

  useEffect(() => {
    setIsVisible(true);
    setCurrentBg(Math.floor(Math.random() * backgrounds.length));

    const interval = setInterval(() => {
      let nextBg;
      do {
        nextBg = Math.floor(Math.random() * backgrounds.length);
      } while (nextBg === currentBg);
      setCurrentBg(nextBg);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentBg]);

  const handlingpage = () => {
    navigate('/products');
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <div 
        className="flex-grow-1 d-flex justify-content-center align-items-center background-transition"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), ${backgrounds[currentBg]}`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transition: 'background-image 1.5s ease-in-out'
        }}
      >
        <div 
          className={`text-center text-white p-4 rounded-3 content-animation ${isVisible ? 'visible' : ''}`}
          style={{ 
            maxWidth: '600px',
            backdropFilter: 'blur(5px)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            borderRadius: '15px',
            padding: '2rem'
          }}
        >
          <h1 className="display-4 fw-bold mb-4 animate-text">
            Shopping Seamless 
            <span className="d-block">With Our Website</span>
          </h1>
          <p className="lead mb-4 animate-text delay-1">
            Discover amazing products at incredible prices. Start your shopping journey today!
          </p>
          <button 
            className="btn btn-primary btn-lg px-5 py-3 shadow-sm animate-text delay-2"
            onClick={handlingpage}
            style={{
              backgroundColor: '#0d6efd',
              borderRadius: '30px'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
