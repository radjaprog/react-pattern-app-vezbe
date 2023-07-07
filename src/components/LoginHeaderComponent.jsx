import React from "react";

export default function LoginHeaderComponent({ children }) {
  return (
    <div>
      <div>{children}</div>
      <p> Ali ovo se renderuje u LoginHeaderComponenti </p>
    </div>
  );
}
