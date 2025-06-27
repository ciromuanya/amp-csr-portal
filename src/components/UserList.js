import React from "react";
import { Link } from "react-router-dom";
import useUserData from "../data/useUserData";
import VehicleThumbnail from "./VehicleThumbnail";
import { styles } from "../styles/styles";

function UserList({ filterStatus }) {
  const [users, setUsers] = useUserData();

  const getStatusColor = (user) => {
    const { active, overdue, canceled, gray } = styles.statusColors;

    if (user.deleted || user.subscriptionStatus === "canceled") return canceled;
    if (user.subscriptionStatus === "overdue") return overdue;

    const hasActiveVehicle = user.vehicles?.some((v) => v.active);
    const hasPurchaseHistory = user.purchaseHistory?.length > 0;

    if (user.subscriptionStatus === "active" && hasActiveVehicle) return active;
    if (!hasPurchaseHistory) return gray;

    return gray;
  };

  const filteredUsers =
    filterStatus && filterStatus !== "all"
      ? users.filter((user) => user.subscriptionStatus === filterStatus)
      : users;

  const toggleDelete = (userId) => {
    const updated = users.map((user) => {
      if (user.id !== userId) return user;

      if (user.deleted) {
        return {
          ...user,
          deleted: false,
          subscriptionStatus: user.previousStatus || "active",
          previousStatus: undefined,
        };
      } else {
        return {
          ...user,
          deleted: true,
          previousStatus: user.subscriptionStatus,
          subscriptionStatus: "canceled",
        };
      }
    });

    setUsers(updated);
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      {filteredUsers.map((user) => (
        <div
          key={user.id}
          style={{
            ...styles.card,
            backgroundColor: getStatusColor(user),
            position: "relative",
            ...styles.flexRowBetween,
          }}
        >
          {/* Top-right delete/undo button */}
          <button
            onClick={() => toggleDelete(user.id)}
            style={{
              ...styles.deleteButton,
              backgroundColor: user.deleted ? "#28a745" : "#dc3545",
            }}
          >
            {user.deleted ? "Undo Delete" : "Delete"}
          </button>

          {/* Left Column: User Info */}
          <div style={{ flex: "1 1 250px", marginRight: "1rem" }}>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Status: {user.subscriptionStatus}</p>
            <Link to={`/user/${user.id}`}>View Details</Link>
          </div>

          {/* Right Column: Vehicle Thumbnails */}
          <div style={styles.thumbnailWrapper}>
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
