import React from "react";

export default function PersonDetails({ person }) {
  return (
    <div>
      <h2>Name is: {person.name}</h2>
      <p>Surname is: {person.surname}</p>
      <p>Age is: {person.age}</p>
      <p>Sex: {person.sex}</p>
      <p>Marriage Status is: {person.marriageStatus}</p>
    </div>
  );
}
