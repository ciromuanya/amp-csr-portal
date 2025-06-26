import React, { useState } from "react";

function SubscriptionEditor({ user, setUsers }) {
  const [vehicles, setVehicles] = useState(user.vehicles);

  const handleChange = (index, e) => {
    const updated = [...vehicles];
    updated[index] = { ...updated[index], [e.target.name]: e.target.value };
    setVehicles(updated);
  };

  const handleToggleActive = (index) => {
    const updated = [...vehicles];
    updated[index].active = !updated[index].active;
    setVehicles(updated);
  };

  const handleSave = () => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === user.id ? { ...u, vehicles } : u
      )
    );
    alert("Vehicle info updated!");
  };

  return (
    <div>
      <h3>Vehicle Subscriptions</h3>
      {vehicles.map((vehicle, index) => (
        <div
          key={vehicle.id}
          style={{ border: "1px solid #ddd", padding: "0.5rem", marginBottom: "0.5rem" }}
        >
          <div>
            <label>Make: </label>
            <input
              name="make"
              value={vehicle.make}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>Model: </label>
            <input
              name="model"
              value={vehicle.model}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>License: </label>
            <input
              name="license"
              value={vehicle.license}
              onChange={(e) => handleChange(index, e)}
            />
          </div>
          <div>
            <label>Status: </label>
            <button type="button" onClick={() => handleToggleActive(index)}>
              {vehicle.active ? "Deactivate" : "Activate"}
            </button>
          </div>
        </div>
      ))}
      <button onClick={handleSave}>Save Vehicle Changes</button>
    </div>
  );
}

export default SubscriptionEditor;
