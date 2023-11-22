// Home.js
import React from "react";
import NavBar from "../components/NavBar";
import PostCard from "../components/PostCard";
import SuggestedUsers from "../components/SuggestedUsers";
import Ads from "../components/Ads";
import { SocialContext } from "../context/socialcontext";

const Home = () => {
  const { posts, users, ads } = React.useContext(SocialContext);

  return (
    <div className="flex bg-gray-900 h-screen w-screen">
      <div className="w-1/2">
        <NavBar />
      </div>

      <div className="bg-gray-900 text-white p-6 w-full mt-10 max-w-[700px] border mx-5 border-gray-800">
        <h1 className="text-4xl font-bold tracking-wider mb-4">
          Welcome to Elewa Social
        </h1>

        <div className="mb-8 w-full">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>

      <div className="w-1/2 h-screen mt-10 mr-5">
        <div className="flex flex-col w-full">
          <div className="w-full">
            <SuggestedUsers users={users} />
          </div>

          <div className="w-full">
            <Ads ads={ads} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
