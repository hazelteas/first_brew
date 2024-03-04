import axios from "axios";
import { useState } from "react";
import { URL_DATA } from "../CONSTANT";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

export default function FormAdd() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    try {
      event.preventDefault();
      const { data } = await axios({
        method: "post",
        url: URL_DATA + "/addUser",
        data: {
          username: username,
          email: email,
          password: password,
        },
      });
      navigate("/getUser");
    } catch (error) {
      swal("Failed to add User", error.response.data.message, "error");
    }
  }

  return (
    <>
      <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md text-black mt-10">
        <Link to="/getUser" className="text-blue-500 mb-4 block text-center">
          &larr; Back to Users
        </Link>
        <h2 className="text-2xl font-bold mb-4 text-center">Add User</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col items-start">
            <label className="text-gray-600">Username</label>
            <input
              type="text"
              className="border rounded-md p-2 bg-white w-full"
              placeholder="Enter username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              className="border rounded-md p-2 bg-white w-full"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-gray-600">Password</label>
            <input
              type="password"
              className="border rounded-md p-2 bg-white w-full"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
}
