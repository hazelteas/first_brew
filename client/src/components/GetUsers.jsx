import axios from "axios";
import { URL_DATA } from "../CONSTANT";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";

export default function GetUsers() {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  
  async function UserData() {
    try {
      const response = await axios({
        method: "get",
        url: URL_DATA + "/getAllUser",
      });

      const responseData = response.data.getAllUSer;

      if (!Array.isArray(responseData)) {
        throw new Error("Invalid API response - expected an array");
      }
      console.log(responseData);
      setData(responseData);
    } catch (error) {
      console.log(error);
      swal("Failed Fetching Data", error.message, "error");
    }
  }

  

  const handleDelete = async (userId) => {
    try {
      await axios.delete(URL_DATA + `/${userId}/delete`); 
     
      navigate('/getUser'); 
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    UserData();
  }, []);

  return (
    <>
      <div>
        {data !== null ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md border border-gray-300 ">
              <thead className="bg-slate-600 text-white">
                <tr>
                  <th className="py-2 px-4">Username</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Action</th>
                </tr>
              </thead>
              <tbody className="text-center border-gray-300 text-black">
                {data.map((user) => (
                  <tr key={user.id}>
                    <td className="py-2 px-4 border-b">{user.username}</td>
                    <td className="py-2 px-4 border-b">{user.email}</td>
                    <td className="py-2 px-4 border-b">
                      <Link
                        to={`/getUser/${user.id}`}
                        className="text-blue-500 
                        hover:underline 
                        transition 
                        duration-300 
                        hover:scale-105 
                        border
                      border-blue-500 
                        rounded-md px-3 py-1"
                      >
                        Edit
                      </Link>
                      <button
                      onClick={() => handleDelete(user.id)}
                      className="text-red-500 hover:underline transition duration-300 hover:scale-105 border border-red-500 rounded-md px-3 py-1 ml-2"
                    >
                      Delete
                    </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}
