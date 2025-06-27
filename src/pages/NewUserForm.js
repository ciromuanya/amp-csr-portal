// src/pages/NewUserForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

function NewUserForm({ setUsers }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subscriptionStatus: "active",
    vehicleMake: "",
    vehicleModel: "",
    vehicleLicense: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: uuidv4(),
      name: form.name,
      email: form.email,
      phone: form.phone,
      subscriptionStatus: form.subscriptionStatus,
      deleted: false,
      vehicles: [
        {
          id: uuidv4(),
          make: form.vehicleMake,
          model: form.vehicleModel,
          license: form.vehicleLicense,
          active: true,
          photoUrl: "",
          platePhotoUrl: ""
        }
      ],
      purchaseHistory: [],
    };

    setUsers((prevUsers) => [...prevUsers, newUser]);
    alert("New user created!");
    navigate("/");
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Create New User</h2>
      <form onSubmit={handleSubmit}>
        <div><label>Name: </label><input name="name" value={form.name} onChange={handleChange} required /></div>
        <div><label>Email: </label><input name="email" value={form.email} onChange={handleChange} required /></div>
        <div><label>Phone: </label><input name="phone" value={form.phone} onChange={handleChange} required /></div>
        <div>
          <label>Subscription Status: </label>
          <select name="subscriptionStatus" value={form.subscriptionStatus} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="overdue">Overdue</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>
        <h4>Initial Vehicle</h4>
        <div><label>Make: </label><input name="vehicleMake" value={form.vehicleMake} onChange={handleChange} required /></div>
        <div><label>Model: </label><input name="vehicleModel" value={form.vehicleModel} onChange={handleChange} required /></div>
        <div><label>License Plate: </label><input name="vehicleLicense" value={form.vehicleLicense} onChange={handleChange} required /></div>
        <button type="submit" style={{ marginTop: '1rem' }}>Create User</button>
      </form>
    </div>
  );
}

export default NewUserForm;
