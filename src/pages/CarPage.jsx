import React from "react";
import CarComponent from "../components/CarComponent";
import BasicCarDetails from "../components/BasicCarDetailsComponent";

export default function CarPage() {
  return (
    <div>
      <CarComponent render={(data) => <BasicCarDetails car={data} />} />
    </div>
  );
}
