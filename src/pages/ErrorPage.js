import React from "react";
import MainNavigation from "../component/MainNavigation";

function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An Error has Occured!!</h1>
        <p>Could not find this page</p>
      </main>
    </>
  );
}

export default ErrorPage;
