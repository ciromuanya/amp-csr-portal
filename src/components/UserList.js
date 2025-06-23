import React from "react";
import { mockUsers } from "../data/mockData";
import { Link } from "react-router-dom";

function UserList() {
  return (
    <div style={{ marginTop: '1rem' }}>
      {mockUsers.map((user) => (
        <div key={user.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <Link to={`/user/${user.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
}

export default UserList;