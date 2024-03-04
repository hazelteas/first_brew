import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl font-bold">
          SOAL 2
        </Link>
        <div className="flex items-center space-x-4">
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
            </>
        </div>
      </div>
    </nav>
  );
}
