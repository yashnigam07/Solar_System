// src/components/Planet.jsx
import React from 'react';

export const Planet = ({ name, size, color, orbitSpeed, distance }) => {
  return (
    <div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        '--distance': `${distance}px`,
        animation: `orbit ${orbitSpeed}s linear infinite`,
        width: `${size}px`,
        height: `${size}px`,
        marginLeft: `${distance}px`,
      }}
    >
      <div
        className="w-full h-full rounded-full"
        style={{
          backgroundColor: color,
          transition: 'background-color 0.5s ease-in-out',
        }}
      ></div>
      <div className="text-white text-center mt-2 text-sm">
        {name}
      </div>
    </div>
  );
};

