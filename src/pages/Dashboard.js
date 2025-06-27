import React, { useState } from "react";
import UserList from "../components/UserList";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div style={{ padding: "1rem" }}>
    {/* Title & Logo Row */}
    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
      <img
        src="/amp-placeholder.png"
        alt="Logo"
        style={{ width: "40px", height: "40px", marginRight: "1rem" }}
      />
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", margin: 0 }}>
        CSR Portal
      </h1>
    </div>

    {/* Controls Row (New User Button + Filter) */}
    <div style={{ display: "flex", alignItems: "center", marginBottom: "1rem", gap: "1rem" }}>
      <button
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/new-user")}
      >
        + New User
      </button>

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
    </div>

    {/* User List */}
    <UserList filterStatus={filterStatus} />
  </div>
  );
}

export default Dashboard;
