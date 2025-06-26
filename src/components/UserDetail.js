import React from "react";
import UserEditForm from "./UserEditForm";
import SubscriptionEditor from "./SubscriptionEditor";
import VehicleThumbnail from "./VehicleThumbnail";

function UserDetail({ user, setUsers }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <UserEditForm user={user} setUsers={setUsers} />
      <SubscriptionEditor user={user} setUsers={setUsers} />

      {/* Vehicle Thumbnails */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Vehicles</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {user.vehicles.map((vehicle) => (
            <VehicleThumbnail key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>

      {/* Purchase History */}
      <div style={{ marginTop: '2rem' }}>
        <h3>Purchase History</h3>
        <ul>
          {user.purchaseHistory.map((p) => (
            <li key={p.id}>
              {p.date}: {p.item} - ${p.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default UserDetail;
