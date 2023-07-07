import React from "react";
import PageLayout from "./PageLayout";

export default function About() {
  return (
    <PageLayout
      header={<header>This is header</header>}
      body={
        <div>
          <h3> Ovo je About content, ja se nalazim u About page-u.</h3>
        </div>
      }
      footer={<footer>ovo je footer</footer>}
    ></PageLayout>
  );
}
