import { createContext, useState } from "react";

export const SocialContext = createContext();

export const SocialProvider = ({ children }) => {
  const [ads, setAds] = useState([
    { id: 1, content: "Upgrade to Elewa Premium for an ad-free experience!" },
    { id: 2, content: "Discover the latest tech gadgets at Tech Expo 2023!" },
  ]);
  const [users, setUsers] = useState([
    {
      id: 101,
      name: "John Doe",
      email: "john@gmail.com",
      is_followed: false,
    },
    {
      id: 102,
      name: "Alice Smith",
      email: "alice@gmail.com",
      is_followed: false,
    },

    {
      id: 103,
      name: "Bob Johnson",
      email: "bib@gmail.com",
      is_followed: false,
    },
  ]);
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: { id: 101, name: "John Doe" },
      content:
        "Excited to join Elewa Social! 🚀 Looking forward to connecting with amazing people in this community.",
      date: "2023-11-25T10:30:00Z",
      likes: 15,
      reposts: 5,
    },
    {
      id: 2,
      author: { id: 102, name: "Alice Smith" },
      content: "Just had a fantastic weekend getaway! 🏞️ #NatureLover",
      date: "2023-11-24T15:45:00Z",
      likes: 20,
      reposts: 8,
    },
    {
      id: 3,
      author: { id: 103, name: "Bob Johnson" },
      content: "Coding all night, but it's worth it! 💻 #DeveloperLife",
      date: "2023-11-23T22:15:00Z",
      likes: 12,
      reposts: 3,
    },
  ]);

  const [user, setUser] = useState(null);

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

    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === id) {
          return { ...user, is_followed: !user.is_followed };
        }
        return user;
      });
    });
  };

  const handleLike = (id) => {

    setPosts((prevPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return { ...post, likes: post.likes + 1 };
        }
        return post;
      });
    });
  };

  return (
    <SocialContext.Provider
      value={{
        posts,
        ads,
        setUsers,
        handleLike,
        handleLogin,
        handleSignup,
        checkUserLoggedIn,
        handleLogout,
        user,
        handleFollow,
        users,
      }}
    >
      {children}
    </SocialContext.Provider>
  );
};
