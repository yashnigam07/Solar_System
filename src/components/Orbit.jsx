// src/components/Orbit.jsx
import React from 'react';

export const Orbit = ({ distance }) => {
  return (
    <div
      className="absolute border border-gray-600 border-dashed rounded-full"
      style={{
        width: `${distance * 2}px`,
        height: `${distance * 2}px`,
        top: `calc(50% - ${distance}px)`,
        left: `calc(50% - ${distance}px)`,
      }}
    />
  );
};
