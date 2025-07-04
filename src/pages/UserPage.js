import React from "react";
import { useParams } from "react-router-dom";
import useUserData from "../data/useUserData";
import UserDetail from "../components/UserDetail";

function UserPage() {
  const { id } = useParams();
  const [users, setUsers] = useUserData();

  const user = users.find((u) => u.id === id);

  if (!user) return <p>User not found.</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <UserDetail user={user} setUsers={setUsers} />
    </div>
  );
}

export default UserPage;
