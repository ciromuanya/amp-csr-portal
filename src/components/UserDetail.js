import React from "react";
import { useNavigate } from "react-router-dom";
import UserEditForm from "./UserEditForm";
import SubscriptionEditor from "./SubscriptionEditor";
import VehicleThumbnail from "./VehicleThumbnail";
import { styles } from "../styles/styles";

function UserDetail({ user, setUsers }) {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "1rem" }}>
      {/* Home Button */}
      <button
        onClick={() => navigate("/")}
        style={{
          ...styles.button,
          marginBottom: "1rem",
        }}
      >
        ← Home
      </button>

      {/* Profile Title */}
      <h2 style={{ fontWeight: "bold", fontSize: "1.4rem", marginBottom: "1rem" }}>
        {user.name}'s Profile Details
      </h2>

      <UserEditForm user={user} setUsers={setUsers} />
      <SubscriptionEditor user={user} setUsers={setUsers} />

      {/* Vehicle Thumbnails */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Vehicles</h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {user.vehicles.map((vehicle) => (
            <VehicleThumbnail key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      {/* Purchase History */}
      <div style={{ marginTop: "2rem" }}>
        <h3>Purchase History</h3>
        <ul>
          {user.purchaseHistory.map((p) => {
            const purchaseDate = new Date(p.date);
            const today = new Date();

            let renewalDays = 0;
            if (p.item.toLowerCase().includes("monthly")) renewalDays = 30;
            else if (p.item.toLowerCase().includes("yearly")) renewalDays = 365;

            let renewalDueDate = new Date(purchaseDate);
            renewalDueDate.setDate(renewalDueDate.getDate() + renewalDays);

            const timeDiff = renewalDueDate.getTime() - today.getTime();
            const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            const renewalMessage =
              renewalDays > 0
                ? daysLeft > 0
                  ? `${daysLeft} day(s) until renewal`
                  : `Overdue by ${Math.abs(daysLeft)} day(s)`
                : "One-time purchase";

            return (
              <li key={p.id}>
                <strong>{p.date}</strong>: {p.item} - ${p.amount.toFixed(2)}
                <br />
                <span style={{ fontStyle: "italic", color: daysLeft < 0 ? "red" : "green" }}>
                  {renewalMessage}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default UserDetail;
