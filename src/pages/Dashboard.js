import React, { useState } from "react";
import UserList from "../components/UserList";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        CSR Portal - User Dashboard
      </h1>

      {/* New User Button */}
      <button
        style={{
          padding: "0.5rem 1rem",
          marginBottom: "1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginRight: "1rem",
        }}
        onClick={() => navigate("/new-user")}
      >
        + New User
      </button>

      {/* Filter Dropdown */}
      <label htmlFor="statusFilter" style={{ marginRight: "0.5rem" }}>
        Filter by Status:
      </label>
      <select
        id="statusFilter"
        value={filterStatus}
        onChange={(e) => setFilterStatus(e.target.value)}
        style={{ padding: "0.3rem" }}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="overdue">Overdue</option>
        <option value="canceled">Canceled</option>
      </select>

      {/* Pass filterStatus as prop to UserList */}
      <UserList filterStatus={filterStatus} />
    </div>
  );
}

export default Dashboard;
