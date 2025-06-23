import React from "react";

function SubscriptionEditor({ user }) {
  return (
    <div>
      <h3>Vehicle Subscriptions</h3>
      {user.vehicles.map((vehicle) => (
        <div key={vehicle.id} style={{ border: '1px solid #ddd', padding: '0.5rem', marginBottom: '0.5rem' }}>
          <p>
            {vehicle.make} {vehicle.model} ({vehicle.license}) -{' '}
            <strong>{vehicle.active ? "Active" : "Inactive"}</strong>
          </p>
        </div>
      ))}
    </div>
  );
}

export default SubscriptionEditor;