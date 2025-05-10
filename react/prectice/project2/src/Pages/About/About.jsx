import React from "react";
import AboutChild from "../../Components/AboutChild";

const About = () => {
  let arrayOfObj = [
    {
      Id: "1",
      Name: "Shreya",
      Class: "React",
      Teacher: "Shaumi Mam",
      Address: "Kolkata, West Bengal",
      Phone: "+91 9876543210",
      Photo: "https://loremfaces.net/96/id/1.jpg",
    },
    {
      Id: "2",
      Name: "Priya Das",
      Class: "HTML",
      Teacher: "Mrs. Gupta",
      Address: "Salt Lake, Kolkata",
      Phone: "+91 9123456789",
      Photo: "https://loremfaces.net/96/id/2.jpg",
    },
    {
      Id: "3",
      Name: "Amit Roy",
      Class: "CSS",
      Teacher: "Mr. Sen",
      Address: "Howrah, West Bengal",
      Phone: "+91 9988776655",
      Photo: "https://loremfaces.net/96/id/3.jpg",
    },
    {
      Id: "4",
      Name: "ZEESHAN KHAN",
      Class: "React",
      Teacher: "Shoumi Mam",
      Address: "Bareilly UTTAR PRADESH",
      Phone: "+91 9568046912",
      Photo: "https://loremfaces.net/96/id/3.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-center">About Us</h1>
      <AboutChild arrayOfObj={arrayOfObj} />
    </>
  );
};

export default About;
