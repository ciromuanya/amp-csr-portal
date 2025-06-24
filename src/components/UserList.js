import React from "react";
import { Link } from "react-router-dom";
import useUserData from "../data/useUserData";

function UserList() {
  const [users] = useUserData();

  return (
    <div style={{ marginTop: '1rem' }}>
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            border: '1px solid #ccc',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '1rem',
          }}
        >
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
