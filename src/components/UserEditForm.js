import React, { useState } from "react";

function UserEditForm({ user }) {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("User info updated!");
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <h3>Edit Account Info</h3>
      <div>
        <label>Name: </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Phone: </label>
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
}

export default UserEditForm;