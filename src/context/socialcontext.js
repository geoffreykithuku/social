import { createContext, useState } from "react";
import { posts, suggestedUsers, ads, users } from "./data";

export const SocialContext = createContext();

export const SocialProvider = ({ children }) => {
  const [usersdata, setUsersdata] = useState([...users]);
  const [postsdata, setPostsdata] = useState([...posts]);
  const [suggestedUsersdata, setSuggestedUsersdata] = useState([
    ...suggestedUsers,
  ]);
  const [adsdata, setAdsdata] = useState([...ads]);
  const [user, setUser] = useState(null);
  //handle like
  const handleLike = (id) => {
    const newPosts = postsdata.map((post) => {
      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPostsdata(newPosts);
  };

  //handle login , signup, logout
  const handleLogin = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const handleSignup = (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  //check if user is logged in
  const checkUserLoggedIn = () => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  };

  const handleFollow = (id) => {
    const newSuggestedUsers = suggestedUsersdata.map((user) => {
      if (user.id === id) {
        return { ...user, is_followed: !user.is_followed };
      }
      return user;
    });
    setSuggestedUsersdata(newSuggestedUsers);
  };

  return (
    <SocialContext.Provider
      value={{
        postsdata,
        adsdata,
        suggestedUsersdata,
        handleLike,
        handleLogin,
        handleSignup,
        checkUserLoggedIn,
        handleLogout,
        user,
        handleFollow,
        setSuggestedUsersdata,
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};
