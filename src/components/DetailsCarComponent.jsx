import React from "react";

export default function CarDetails({ car }) {
  return (
    <div>
      <h2>Car brand: {car.brand}</h2>
      <p>Car color is: {car.color}</p>
      <p>Car is {car.fuel.toUpperCase()}</p>
    </div>
  );
}
