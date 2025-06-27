import React, { useState } from "react";
import { styles } from "../styles/styles";

function VehicleThumbnail({ vehicle }) {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => setExpanded(!expanded);

  return (
    <div
      onClick={toggleExpand}
      style={{
        cursor: "pointer",
        border: "1px solid #aaa",
        borderRadius: "8px",
        padding: "0.5rem",
        width: "160px",
        minHeight: "250px",
        margin: "0.5rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      <img
        src={vehicle.photoUrl}
        alt={`${vehicle.make} ${vehicle.model}`}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/placeholder.png";
        }}
        style={{
          display: "block",
          width: "100%",
          height: "100px",
          objectFit: "cover",
          borderRadius: "4px",
          backgroundColor: "#e0e0e0",
        }}
      />
      <h4 style={{ margin: "0.5rem 0" }}>
        {vehicle.make} {vehicle.model}
      </h4>
      <p style={{ fontSize: "0.9rem" }}>Plate: {vehicle.license}</p>

      {expanded && (
        <div style={{ marginTop: "0.5rem" }}>
          <img
            src={vehicle.platePhotoUrl}
            alt="License plate"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/placeholder-plate.png";
            }}
            style={{
              width: "100%",
              height: "80px",
              objectFit: "cover",
              borderRadius: "4px",
              backgroundColor: "#e0e0e0",
            }}
          />
          <p>
            Status: <strong>{vehicle.active ? "Active" : "Inactive"}</strong>
          </p>
        </div>
      )}
    </div>
  );
}

export default VehicleThumbnail;
