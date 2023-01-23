import React from "react";
import { Outlet } from "react-router-dom";

const About = (props) => {
  return (
    <div>
      <h4>회사정보 페이지임다</h4>
      <Outlet></Outlet>
    </div>
  );
};

export default About;
