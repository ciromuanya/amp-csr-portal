import React from "react";
import UserEditForm from "./UserEditForm";
import SubscriptionEditor from "./SubscriptionEditor";

function UserDetail({ user, setUsers }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      <UserEditForm user={user} setUsers={setUsers} />
      <SubscriptionEditor user={user} />
      <div style={{ marginTop: '1rem' }}>
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
