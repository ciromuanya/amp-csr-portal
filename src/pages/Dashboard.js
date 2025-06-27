import React from "react";
import UserList from "../components/UserList";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CSR Portal - User Dashboard</h1>

      {/* New User Button */}
      <button
        style={{
          padding: "0.5rem 1rem",
          marginBottom: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer"
        }}
        onClick={() => navigate("/new-user")}
      >
        + New User
      </button>

      <UserList />
    </div>
  );
}

export default Dashboard;
