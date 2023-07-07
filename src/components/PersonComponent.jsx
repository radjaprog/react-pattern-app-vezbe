import React, { useState } from "react";

export default function PersonComponent({ render }) {
  const [data, setData] = useState({
    name: "Vladimir",
    surname: "Petkovski",
    age: 42,
    sex: "male",
    marriageStatus: "married",
  });
  return <div>{render(data)} </div>;
}
