import React from "react";
import { Link } from "react-router-dom";

export default function NavbarLogin() {
  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          SOAL 2
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/addUser" className="text-white">
            AddUser
          </Link>
          <Link to="/" onClick={handleLogout} className="text-white">
            Logout
          </Link>
        </div>
      </div>
    </nav>
  );
}
