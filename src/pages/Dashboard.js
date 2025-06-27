import React, { useState } from "react";
import UserList from "../components/UserList";
import { useNavigate } from "react-router-dom";
import { styles } from "../styles/styles";

function Dashboard() {
  const navigate = useNavigate();
  const [filterStatus, setFilterStatus] = useState("all");

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        CSR Portal | Dashboard
      </h1>

      {/* New User Button */}
      <button
        style={{ ...styles.button, marginBottom: "1rem", marginRight: "1rem" }}
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
        style={{
          padding: "0.3rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="overdue">Overdue</option>
        <option value="canceled">Canceled</option>
      </select>

      <UserList filterStatus={filterStatus} />
    </div>
  );
}

export default Dashboard;
