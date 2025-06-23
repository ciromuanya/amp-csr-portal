import React from "react";
import UserList from "../components/UserList";

function Dashboard() {
  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>CSR Portal - User Dashboard</h1>
      <UserList />
    </div>
  );
}

export default Dashboard;
