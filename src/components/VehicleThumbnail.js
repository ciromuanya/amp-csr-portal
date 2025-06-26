import React, { useState } from "react";

function VehicleThumbnail({ vehicle }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div
      onClick={toggleExpand}
      style={{
        cursor: 'pointer',
        border: '1px solid #aaa',
        borderRadius: '8px',
        padding: '0.5rem',
        width: '160px',
        margin: '0.5rem',
        backgroundColor: '#f9f9f9',
      }}
    >
      <img
        src={vehicle.photoUrl}
        alt={`${vehicle.make} ${vehicle.model}`}
        style={{ width: '100%', borderRadius: '4px' }}
      />
      <h4 style={{ margin: '0.5rem 0' }}>{vehicle.make} {vehicle.model}</h4>
      <p style={{ fontSize: '0.9rem' }}>Plate: {vehicle.license}</p>
      {expanded && (
        <div style={{ marginTop: '0.5rem' }}>
          <img
            src={vehicle.platePhotoUrl}
            alt="License plate"
            style={{ width: '100%', borderRadius: '4px' }}
          />
          <p>Status: <strong>{vehicle.active ? 'Active' : 'Inactive'}</strong></p>
        </div>
      )}
    </div>
  );
}

export default VehicleThumbnail;
