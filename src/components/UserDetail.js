import React, { useState } from "react";
import UserEditForm from "./UserEditForm";
import SubscriptionEditor from "./SubscriptionEditor";
import VehicleThumbnail from "./VehicleThumbnail";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";


function UserDetail({ user, setUsers }) {
   const navigate = useNavigate();
   const [form, setForm] = useState({
       type: "Monthly Membership",
       amount: 29.99,
   });


   const handlePurchaseChange = (e) => {
       const value = e.target.value;
       setForm({
           type: value,
           amount: value === "Monthly Membership" ? 29.99 : 299.99,
       });
   };


   const handleAddPurchase = (e) => {
       e.preventDefault();


       const newPurchase = {
           id: uuidv4(),
           item: form.type,
           amount: form.amount,
           date: new Date().toISOString().slice(0, 10),
       };


       const updatedUser = {
           ...user,
           subscriptionStatus: "active",
           purchaseHistory: [...user.purchaseHistory, newPurchase],
       };


       setUsers((prev) =>
           prev.map((u) => (u.id === user.id ? updatedUser : u))
       );
       alert("Purchase added and user status set to Active.");
   };


   return (
       <div style={{ marginTop: '1rem' }}>


           {/* Home Button */}
           <button
               onClick={() => navigate("/")}
               style={{
                   marginBottom: '1rem',
                   padding: '0.5rem 1rem',
                   backgroundColor: '#007bff',
                   color: 'white',
                   border: 'none',
                   borderRadius: '4px',
                   cursor: 'pointer',
               }}
           >
               ← Home
           </button>


           {/* Profile Title */}
           <h2 style={{ fontWeight: 'bold', fontSize: '1.4rem', marginBottom: '1rem' }}>
               {user.name}'s Profile Details
           </h2>


           <UserEditForm user={user} setUsers={setUsers} />
           <SubscriptionEditor user={user} setUsers={setUsers} />


           {/* Vehicle Thumbnails */}
           <div style={{ marginTop: '2rem' }}>
               <h3>Vehicles</h3>
               <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                   {user.vehicles.map((vehicle) => (
                       <VehicleThumbnail key={vehicle.id} vehicle={vehicle} />
                   ))}
               </div>
           </div>


           {/* Purchase History */}
           <div style={{ marginTop: '2rem' }}>
               <h3>Purchase History</h3>
               <ul>
                   {user.purchaseHistory.map((p) => {
                       const purchaseDate = new Date(p.date);
                       const today = new Date();


                       let renewalDays = 0;
                       if (p.item.toLowerCase().includes("monthly")) renewalDays = 30;
                       else if (p.item.toLowerCase().includes("yearly")) renewalDays = 365;


                       let renewalDueDate = new Date(purchaseDate);
                       renewalDueDate.setDate(renewalDueDate.getDate() + renewalDays);


                       const timeDiff = renewalDueDate.getTime() - today.getTime();
                       const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));


                       const renewalMessage = renewalDays > 0
                           ? (daysLeft > 0
                               ? `${daysLeft} day(s) until renewal`
                               : `Overdue by ${Math.abs(daysLeft)} day(s)`)
                           : "One-time purchase";


                       return (
                           <li key={p.id}>
                               <strong>{p.date}</strong>: {p.item} - ${p.amount.toFixed(2)}<br />
                               <span style={{ fontStyle: 'italic', color: daysLeft < 0 ? 'red' : 'green' }}>
                                   {renewalMessage}
                               </span>
                           </li>
                       );
                   })}
               </ul>


               {/* Add New Purchase */}
               <form onSubmit={handleAddPurchase} style={{ marginTop: '1rem' }}>
                   <h4>Add New Membership Purchase</h4>
                   <label>
                       Type:{" "}
                       <select value={form.type} onChange={handlePurchaseChange}>
                           <option value="Monthly Membership">Monthly Membership</option>
                           <option value="Yearly Membership">Yearly Membership</option>
                       </select>
                   </label>
                   <button type="submit" style={{ marginLeft: "0.5rem" }}>
                       Add Purchase
                   </button>
               </form>


               {/* Toggle Membership Status */}
               <div style={{ marginTop: "2rem" }}>
                   <button
                       onClick={() => {
                           const isCanceling = user.subscriptionStatus !== "canceled";
                           const action = isCanceling ? "cancel" : "reactivate";


                           const confirmed = window.confirm(
                               `Are you sure you want to ${action} this user's membership?`
                           );
                           if (!confirmed) return;


                           const newStatus = isCanceling ? "canceled" : "active";


                           const updatedUser = {
                               ...user,
                               subscriptionStatus: newStatus,
                               purchaseHistory: isCanceling
                                   ? [
                                       ...user.purchaseHistory,
                                       {
                                           id: uuidv4(),
                                           item: "Membership Canceled",
                                           amount: 0.0,
                                           date: new Date().toISOString().slice(0, 10),
                                       },
                                   ]
                                   : [
                                       ...user.purchaseHistory,
                                       {
                                           id: uuidv4(),
                                           item: "Membership Reactivated (CSR Action)",
                                           amount: 0.0,
                                           date: new Date().toISOString().slice(0, 10),
                                       },
                                   ],
                           };




                           setUsers((prev) =>
                               prev.map((u) => (u.id === user.id ? updatedUser : u))
                           );


                           alert(
                               isCanceling
                                   ? "Membership canceled and logged."
                                   : "Membership reactivated."
                           );
                       }}
                       style={{
                           backgroundColor: user.subscriptionStatus === "canceled" ? "green" : "red",
                           color: "white",
                           border: "none",
                           padding: "0.5rem 1rem",
                           borderRadius: "5px",
                           cursor: "pointer",
                       }}
                   >
                       {user.subscriptionStatus === "canceled"
                           ? "Reactivate Membership"
                           : "Cancel Membership"}
                   </button>
               </div>




           </div>
       </div>
   );
}


export default UserDetail;