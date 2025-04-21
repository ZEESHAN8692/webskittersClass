import React from "react";

const Object = (props) => {
  return (
    <>
      <h1 className="text-4xl text-center font-bold text-blue-700">
        Object Data
      </h1>
      <br />
      <div className="w-[80%] m-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Class</th>
              <th className="border px-4 py-2 text-left">Teacher</th>
              <th className="border px-4 py-2 text-left">Address</th>
              <th className="border px-4 py-2 text-left">Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">{props.objData.name}</td>
              <td className="border px-4 py-2">{props.objData.class}</td>
              <td className="border px-4 py-2">{props.objData.teacher}</td>
              <td className="border px-4 py-2">{props.objData.address}</td>
              <td className="border px-4 py-2">{props.objData.phone}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="text-center">------------------------------</p>
    </>
  );
};

export default Object;
