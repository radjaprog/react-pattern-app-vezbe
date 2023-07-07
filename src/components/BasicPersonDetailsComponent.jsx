import React from "react";

export default function ({ person }) {
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.surname}</h2>
      <h3>{person.age}</h3>
    </div>
  );
}
