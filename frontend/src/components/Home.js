import React from "react";
import AdmissionForm from "./AdmissionForm";
import StudentsList from "./StudentsList";

const Home = () => {
  return (
    <div className="container">
      <AdmissionForm/>
      <StudentsList/>
    </div>
  );
};

export default Home;
