import React from "react";
import { Link } from "react-router-dom";

export const Portfolio = (props) => {


  return (
    <div>
      <h1>See my Projects</h1>

      <Link  to="/portfolio/1">project one</Link>
      <Link  to="/portfolio/2">project Two</Link>
    </div>
  );
};
export default Portfolio;
