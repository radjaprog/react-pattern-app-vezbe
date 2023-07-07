import React from "react";
import PersonComponent from "../components/PersonComponent";
import BasicPersonDetails from "../components/BasicPersonDetailsComponent";

export default function Person() {
  return (
    <div>
      <PersonComponent
        render={(data) => <BasicPersonDetails person={data} />}
      />
    </div>
  );
}
