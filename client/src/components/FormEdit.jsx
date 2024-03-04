import { useState, useEffect } from "react";

import axios from "axios";
import { URL_DATA } from "../CONSTANT";
import swal from "sweetalert";
import { useNavigate, useParams } from "react-router-dom";
export default function FormEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  // console.log(useParams());
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log(formData);

  

  const fetchData = async (e) => {
    try {
      const { data } = await axios({
        url: URL_DATA + `/getAllUser/${id}`,
        method: "GET",
        data: formData,
      });
      console.log(data.getAllUSer);
      const dataFetch = {
        username: data.getAllUSer[0].username,
        email: data.getAllUSer[0].email,
        password: data.getAllUSer[0].password,
      };
      setFormData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios({
        method: "put",
        url: URL_DATA + `/getAllUser/${id}`,
        data: formData,
      });
      swal("Edit User Done");
      navigate("/getUser");
    } catch (error) {
      console.log(error);
      // swal("failed to Update User");
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md text-black">
        <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>
        <form onClick={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-start">
            <label className="text-gray-600">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="border rounded-md p-2 w-full bg-white"
              placeholder="Enter username"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-600">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-md p-2 w-full bg-white"
              placeholder="Enter email"
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-md p-2 w-full bg-white"
              placeholder="Enter password"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
