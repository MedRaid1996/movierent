export default function Toast({ message }) {
  return (
    <div style={{
      position: "fixed",
      right: 18,
      bottom: 18,
      padding: "10px 14px",
      borderRadius: 14,
      background: "rgba(17,24,39,.9)",
      border: "1px solid rgba(255,255,255,.12)",
      color: "#e5e7eb",
      boxShadow: "0 12px 30px rgba(0,0,0,.35)"
    }}>
      ✅ {message}
    </div>
  );
}

