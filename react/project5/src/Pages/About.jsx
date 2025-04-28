import React from "react";
import { useParams } from "react-router-dom";
const About = () => {
  const { data1, data2 } = useParams();
  console.log(data1, data2);
  return (
    <div>
      <h1>About Page</h1>
      <br />
      <h1>
        {data2} {data1}
      </h1>
    </div>
  );
};

export default About;
