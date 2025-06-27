import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function SubscriptionEditor({ user, setUsers }) {
  const [vehicles, setVehicles] = useState(user.vehicles || []);

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

  const handleAddVehicle = () => {
    const newVehicle = {
      id: uuidv4(),
      make: "",
      model: "",
      license: "",
      active: false,
      photoUrl: "",
      platePhotoUrl: ""
    };
    setVehicles([...vehicles, newVehicle]);
  };

  const handleDeleteVehicle = (id) => {
    const updated = vehicles.filter((v) => v.id !== id);
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
          <div>
            <button
              type="button"
              style={{ marginTop: '0.5rem', color: 'red' }}
              onClick={() => handleDeleteVehicle(vehicle.id)}
            >
              Delete Vehicle
            </button>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '1rem' }}>
        <button type="button" onClick={handleAddVehicle}>
          Add Vehicle
        </button>
        <button type="button" onClick={handleSave} style={{ marginLeft: '1rem' }}>
          Save Vehicle Changes
        </button>
      </div>
    </div>
  );
}

export default SubscriptionEditor;
