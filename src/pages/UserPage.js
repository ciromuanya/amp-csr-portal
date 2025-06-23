import React from "react";
import { useParams } from "react-router-dom";
import { mockUsers } from "../data/mockData";
import UserDetail from "../components/UserDetail";

function UserPage() {
  const { id } = useParams();
  const user = mockUsers.find((u) => u.id === id);

  if (!user) return <p>User not found.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>User Detail</h1>
      <UserDetail user={user} />
    </div>
  );
}

export default UserPage;