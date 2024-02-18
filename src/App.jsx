import React, { useEffect, useState } from "react";
import LogIn from "./components/LogIn";
import Library from "./components/Library";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar"
import PlayPage from "./components/PlayPage"

export default function App () {
  return (
    <Router>
      <div className="flex h-screen w-screen bg-gray-800 rounded-1xl">
        <SideBar />
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/playpage" element={<PlayPage />} />
        </Routes>
      </div>
    </Router>
  );
} 



/*export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedIn === "true");
  }, []);

  const handleLogIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
  };

  return (
    <Router>
      <div className="flex h-screen w-screen bg-gray-800 rounded-1xl">
        {isLoggedIn && <SideBar />}
        <Routes>
          <Route path="/library" element={<Library />} />
          <Route path="/login" element={<LogIn onLogIn={handleLogIn} />} />
          {isLoggedIn ? <Navigate to="/library" /> : null}
        </Routes>
      </div>
    </Router>
  );
} */