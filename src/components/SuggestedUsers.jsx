import React, { useContext } from "react";
import { SocialContext } from "../context/socialcontext";

const SuggestedUsers = ({ users }) => {
  const { handleFollow } = useContext(SocialContext);

  return (
    <div className="bg-gray-900 p-4 rounded-md mb-4 border border-gray-800">
      <h2 className="text-white font-bold mb-2">People to Follow</h2>
      <ul className="flec flex-col">
        {users.map((user) => (
          <li
            key={user.id}
            className="text-gray-300 bg-gray-800 py-3 px-5 rounded my-2 flex items-center justify-start gap-5"
          >
            <img src="./profile.webp" alt="" className="rounded-full w-5 h-5" />
            {user.name}
            <button
              onClick={() => handleFollow(user.id)}
              className="ml-auto bg-gray-300 text-gray-800 px-4 py-1 rounded-full"
            >
              {user.is_followed ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestedUsers;
