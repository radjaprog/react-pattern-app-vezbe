import React, { useState } from "react";

export default function CarComponent({ render }) {
  const [data, setData] = useState({
    brand: "Toyota",
    color: "red",
    fuel: "diesel",
  });

  return <div>{render(data)}</div>;
}
