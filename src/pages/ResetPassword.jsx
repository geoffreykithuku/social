import React from "react";

const ResetPassword = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-6">
      {/* reset password page */}
      <div className="w-full max-w-md">
        <h1 className="text-3xl tracking-wider text-gray-300 mb-2">
          Reset Password - Elewa Social
        </h1>
        <form className="mt-6 border-t border-gray-400 pt-4">
          <div className="flex flex-col">
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              className="w-full bg-gray-800 text-gray-300 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            />
          </div>
          <button className="bg-gray-300 text-gray-800 mt-6 p-3 rounded-lg w-full font-semibold focus:outline-none focus:shadow-outline">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
