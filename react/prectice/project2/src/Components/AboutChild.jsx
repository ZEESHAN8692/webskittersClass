import React from "react";

const AboutChild = (props) => {
  return (
    <>
      <h1>About Child Componets</h1>
      <table className="border">
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>CLASS</th>
          <th>TEACHER</th>
          <th>ADDRESS</th>
          <th>PHONE</th>
        </tr>
        {props.arrayOfObj.map((item) => (
          <tr>
            <td>{item.Id}</td>
            <td>{item.Name}</td>
            <td>{item.Class}</td>
            <td>{item.Teacher}</td>
            <td>{item.Address}</td>
            <td>{item.Phone}</td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default AboutChild;
