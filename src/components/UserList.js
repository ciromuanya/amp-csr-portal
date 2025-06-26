import React from "react";
import { Link } from "react-router-dom";
import useUserData from "../data/useUserData";

function UserList() {
  const [users] = useUserData();

  const getStatusColor = (user) => {
    if (user.deleted || user.subscriptionStatus === "canceled") return "#f8d7da"; // red
    if (user.subscriptionStatus === "overdue") return "#fff3cd"; // yellow
    const hasActiveVehicle = user.vehicles?.some((v) => v.active);
    if (user.subscriptionStatus === "active" && hasActiveVehicle) return "#d4edda"; // green
    return "#e2e3e5"; // default gray if unmatched
  };

  return (
    <div style={{ marginTop: '1rem' }}>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            backgroundColor: getStatusColor(user),
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem'
          }}
        >
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Status: {user.subscriptionStatus}</p>
          <Link to={`/user/${user.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;
