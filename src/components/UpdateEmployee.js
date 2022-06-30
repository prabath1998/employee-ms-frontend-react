import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const [id] = useParams();
  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {}, []);

  const updateEmployee = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Employee</h1>
        </div>
        <div className="items-center justify-center h-16 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-16 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>
        <div className="items-center justify-center h-16 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Email
          </label>
          <input
            type="email"
            className="h-10 w-96 border mt-2 px-2 py-2"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div className="items-center justify-center h-16 w-full my- space-x-4 pt-4">
          <button
            className="rounded text-white font-semibold bg-green-400 py-2 px-6 hover:bg-green-700"
            onClick={updateEmployee}
          >
            Update
          </button>
          <button className="rounded text-white font-semibold bg-red-400 py-2 px-6 hover:bg-red-700">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;