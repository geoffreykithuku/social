
import { useEffect } from "react";
import { Outlet, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home, Login, Profile, ResetPassword, SignUp } from "./pages";
import { useContext } from "react";
import { SocialContext } from "./context/socialcontext";
function Layout() {
  const { user, checkUserLoggedIn } = useContext(SocialContext);
  const location = useLocation();

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}
function App() {
  return (
    <div className="w-full bg-gray-900 min-h-screen overflow-scroll top-0 left-0 right-0 bottom-0">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="profile/:id" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
