import React from "react";
import Task from "./Task/Task";
import Header from "./common/Header";

function LandingPage() {
  return (
    <div className="h-100vh">
      <Header />
      <Task />
    </div>
  );
}

export default LandingPage;
