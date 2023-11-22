// LogoutButton.js
import React from "react";

const LogoutButton = ({ onLogout }) => {
  return (
    <button className="bg-red-500 text-white p-2 rounded-md" onClick={onLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
