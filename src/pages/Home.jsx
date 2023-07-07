import React from "react";
import PageLayout from "./PageLayout";

export default function Home() {
  return (
    <PageLayout
      header={<header>This is header</header>}
      body={
        <div>
          <h3> Ovo je home content, ja se nalazim u home page-u.</h3>
        </div>
      }
      footer={<footer>ovo je footer</footer>}
    ></PageLayout>
  );
}
