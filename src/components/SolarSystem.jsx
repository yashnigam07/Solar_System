// src/components/SolarSystem.jsx
import React from 'react';
import { Sun } from './Sun';
import { Planet } from './Planet';
import { Orbit } from './Orbit';

export const SolarSystem = () => {
  const planets = [
    { name: 'Mercury', size: 10, color: 'gray', orbitSpeed: 5, distance: 50 },
    { name: 'Venus', size: 15, color: 'orange', orbitSpeed: 8, distance: 75 },
    { name: 'Earth', size: 16, color: 'blue', orbitSpeed: 10, distance: 100 },
    { name: 'Mars', size: 12, color: 'red', orbitSpeed: 12, distance: 125 },
    { name: 'Jupiter', size: 35, color: 'brown', orbitSpeed: 20, distance: 175 },
    { name: 'Saturn', size: 30, color: 'yellow', orbitSpeed: 25, distance: 225 },
    { name: 'Uranus', size: 25, color: 'lightblue', orbitSpeed: 30, distance: 275 },
    { name: 'Neptune', size: 24, color: 'darkblue', orbitSpeed: 35, distance: 325 },
  ];

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="stars"></div>
      <Sun />
      {planets.map((planet) => (
        <React.Fragment key={planet.name}>
          <Orbit distance={planet.distance} />
          <Planet
            name={planet.name}
            size={planet.size}
            color={planet.color}
            orbitSpeed={planet.orbitSpeed}
            distance={planet.distance}
          />
        </React.Fragment>
      ))}
    </div>
  );
};
