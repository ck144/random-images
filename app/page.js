"use client"
import React, { useState, useEffect } from 'react';

const generateId = () => Date.now() + Math.random().toString(36).substr(2, 9);

const Page = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isHovering, setIsHovering] = useState(null);

  const fetchImage = async () => {
    setLoading(true);
    try {
      const imageUrl = `https://picsum.photos/300/400?random=${generateId()}`;
      setImages(prev => [...prev, { url: imageUrl, id: generateId() }]);
    } catch (error) {
      console.error("Error fetching image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <button onClick={fetchImage} className='btn' disabled={loading}>
        {loading ? 'Loading...' : 'Get Image'}
      </button>
      
      <div className='imgs'>
        {images.map((image) => (
          <div 
            key={image.id}
            className="img-container"
            onMouseEnter={() => setIsHovering(image.id)}
            onMouseLeave={() => setIsHovering(null)}
          >
            <img
              src={image.url}
              alt="Random from picsum"
              className="image-item"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;