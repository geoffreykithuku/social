// PostCard.js
import React from "react";
import { SocialContext } from "../context/socialcontext";

const PostCard = ({ post }) => {
  const { handleLike } = React.useContext(SocialContext);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-md mb-4">
      <div className="flex items-center justify-between">
        <p className="text-white">{post.content}</p>
      </div>
      <div className="flex items-center justify-between mt-2 ">
        <p className="text-gray-500">Posted by: {post.author.name}</p>
        <div className="flex space-x-4">
          <button
            onClick={() => {
              handleLike(post.id);
            }}
            className="text-gray-50"
          >
            <i className="fas fa-thumbs-up"></i>
          </button>
          <p className="text-gray-500"> {post.likes}</p>

          <p className="text-gray-500">{formatDate(post.date)}</p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
