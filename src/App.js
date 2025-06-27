// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/UserPage";
import NewUserForm from "./pages/NewUserForm";
import useUserData from "./data/useUserData"; // ✅ Your custom localStorage hook

function App() {
  const [users, setUsers] = useUserData(); // ✅ Now using localStorage-backed hook

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard users={users} setUsers={setUsers} />} />
        <Route path="/user/:id" element={<UserPage users={users} setUsers={setUsers} />} />
        <Route path="/new-user" element={<NewUserForm setUsers={setUsers} />} />
      </Routes>
    </Router>
  );
}

export default App;
