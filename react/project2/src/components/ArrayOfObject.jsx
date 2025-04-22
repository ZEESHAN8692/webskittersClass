import React from "react";

const ArrayOfObject = (props) => {
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
              <th className="border px-4 py-2 text-left">Id</th>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Class</th>
              <th className="border px-4 py-2 text-left">Teacher</th>
              <th className="border px-4 py-2 text-left">Address</th>
              <th className="border px-4 py-2 text-left">Phone</th>
              <th className="border px-4 py-2 text-left">Photo</th>
            </tr>
          </thead>
          <tbody>
            {props.arrOfObjData.map((item) => {
              return (
                <tr key={item.Id}>
                  <td className="border px-4 py-2">{item.Id}</td>
                  <td className="border px-4 py-2">{item.Name}</td>
                  <td className="border px-4 py-2">{item.Class}</td>
                  <td className="border px-4 py-2">{item.Teacher}</td>
                  <td className="border px-4 py-2">{item.Address}</td>
                  <td className="border px-4 py-2">{item.Phone}</td>
                  <td className="border px-4 py-2">
                    <img src={item.Photo} alt="" />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ArrayOfObject;
