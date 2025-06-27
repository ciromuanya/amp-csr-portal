// Shared style constants for reuse across components

export const styles = {
    card: {
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      marginBottom: "1rem",
    },
    flexRowBetween: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
    },
    button: {
      padding: "0.5rem 1rem",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    deleteButton: {
      padding: "0.4rem 0.75rem",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      position: "absolute",
      top: "0.5rem",
      right: "0.5rem",
    },
    thumbnailWrapper: {
      flex: "2 1 400px",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "flex-start",
      gap: "0.5rem",
      marginTop: "0.5rem",
    },
    statusColors: {
      active: "#d4edda",
      overdue: "#fff3cd",
      canceled: "#f8d7da",
      deleted: "#f8d7da",
      gray: "#e2e3e5",
    },
  };
  