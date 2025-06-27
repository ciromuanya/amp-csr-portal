import React from "react";
import { Link } from "react-router-dom";
import useUserData from "../data/useUserData";
import VehicleThumbnail from "./VehicleThumbnail"; // ✅ import thumbnail component

function UserList({ filterStatus }) {
  const [users, setUsers] = useUserData();

  const getStatusColor = (user) => {
    if (user.deleted || user.subscriptionStatus === "canceled") return "#f8d7da"; // red
    if (user.subscriptionStatus === "overdue") return "#fff3cd"; // yellow

    const hasActiveVehicle = user.vehicles?.some((v) => v.active);
    const hasPurchaseHistory = user.purchaseHistory && user.purchaseHistory.length > 0;

    if (user.subscriptionStatus === "active" && hasActiveVehicle) return "#d4edda"; // green
    if (!hasPurchaseHistory) return "#e2e3e5"; // gray

    return "#e2e3e5"; // fallback gray
  };

  const filteredUsers =
    filterStatus && filterStatus !== "all"
      ? users.filter((user) => user.subscriptionStatus === filterStatus)
      : users;

  const handleDelete = (userId) => {
    const updated = users.map((user) =>
      user.id === userId ? { ...user, deleted: true } : user
    );
    setUsers(updated);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          style={{
            backgroundColor: getStatusColor(user),
            border: "1px solid #ccc",
            borderRadius: "8px",
            marginBottom: "1rem",
            padding: "1rem",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          {/* Left Column: User Info + Button */}
          <div style={{ flex: "1 1 250px", marginRight: "1rem" }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Status: {user.subscriptionStatus}</p>
            <Link to={`/user/${user.id}`}>View Details</Link>
            <div style={{ marginTop: "1rem" }}>
              <button
                onClick={() => handleDelete(user.id)}
                style={{
                  padding: "0.4rem 0.75rem",
                  backgroundColor: "#dc3545",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </div>
          </div>

          {/* Right Column: Vehicle Thumbnails */}
          <div
            style={{
              flex: "2 1 400px",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-start",
              gap: "0.5rem",
              marginTop: "0.5rem"
            }}
          >
            {user.vehicles?.map((vehicle) => (
              <VehicleThumbnail key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
