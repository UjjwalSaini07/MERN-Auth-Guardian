import React from "react";
import "./index.css";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-green-400 to-blue-500">
      <div className="text-center p-12 bg-white rounded-2xl shadow-2xl max-w-2xl">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to <span className="text-green-500">MERN-Auth-Guardian</span>
        </h1>
        <button className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default App;
