import React, { useState } from "react";

const UseState = () => {
  const [word, setWord] = useState("Hello");
  const [num, setNum] = useState(1);
  const [obj, setObj] = useState({
    name: "zeesshan",
    last_name: "khan",
    age: 23,
  });
  const Days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const changeValue = () => {
    word === "Hello" ? setWord("Zeeshan Khan ") : setWord("Hello");
  };

  const changeNum = () => setNum(num + 1);
  const changeLastName = () => {
    obj.last_name === "Khan"
      ? setObj({ ...obj, last_name: "KHAN" })
      : setObj({ ...obj, last_name: "Khan" });
  };

  const [day, setDay] = useState(0);
  const nextDay = () => {
    setDay(day + 1);
    // if (day === "Monday") return setDay(Days[1]);
    // if (day === "Tuesday") return setDay(Days[2]);
    // if (day === "Wednesday") return setDay(Days[3]);
    // if (day === "Thursday") return setDay(Days[4]);
    // if (day === "Fryday") return setDay(Days[5]);
    // if (day === "Seturday") return setDay(Days[6]);
    // if (day === "Sunday") return setDay("No More Days");
  };

  const images = [
    "https://img.freepik.com/free-photo/indian-travel-destination-beautiful-attractive_53876-16345.jpg?uid=R132759379&ga=GA1.1.607066617.1722413689&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/beautiful-snow-covered-mountains-landscape-kashmir-state-india_1232-4817.jpg?uid=R132759379&ga=GA1.1.607066617.1722413689&semt=ais_hybrid&w=740",
    "https://img.freepik.com/free-photo/beautiful-snow-covered-mountains-landscape-kashmir-state-india_1232-4816.jpg?uid=R132759379&ga=GA1.1.607066617.1722413689&semt=ais_hybrid&w=740",
  ];

  const [slideImg, setSlideImg] = useState(0);
  const nextImg = () => {
    slideImg < 2 ? setSlideImg(slideImg + 1) : setSlideImg(0);
  };
  console.log("slideIndex", slideImg);
  return (
    <div>
      <h1>{word}</h1>
      <button onClick={changeValue}>Change Value </button>
      <br />

      <h1>{num}</h1>
      <button onClick={changeNum}>Change Value </button>
      <br />
      <br />

      <p>
        <b>Name</b> :{obj.name}
      </p>
      <p>
        <b>Last Name</b> :{obj.last_name}
      </p>
      <p>
        <b>Age</b> :{obj.age}
      </p>
      <br />
      <button onClick={changeLastName}>Change Last Name</button>
      <br />
      <br />

      <h1>Day: -{day < 7 ? Days[day] : "No More Days"}</h1>
      <button onClick={nextDay}>Next Day </button>

      <br />
      <br />

      <img src={images[slideImg]} alt="" width={"300px"} />
      <button onClick={nextImg}>Next Img </button>
    </div>
  );
};

export default UseState;
