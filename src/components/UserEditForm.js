import React, { useState } from "react";
import { styles } from "../styles/styles";

function UserEditForm({ user, setUsers }) {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = { ...formData };
    setUsers((prev) =>
      prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
    );

    alert("User info updated!");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <h3>Edit Account Info</h3>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>Name: </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "0.3rem", marginLeft: "0.5rem" }}
        />
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>Email: </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: "0.3rem", marginLeft: "0.5rem" }}
        />
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>Phone: </label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={{ padding: "0.3rem", marginLeft: "0.5rem" }}
        />
      </div>

      <button type="submit" style={styles.button}>
        Save
      </button>
    </form>
  );
}

export default UserEditForm;
