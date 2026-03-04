import './Dashboard.css';

export default function PatientDashboard() {
  return (
    <div className="dashboard-wrapper dashboard-patient">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, flexDirection: "column", gap: "12px" }}>
        <div style={{ fontSize: "48px" }}>🌸</div>
        <div style={{ fontSize: "24px", fontWeight: 800, color: "#5b1a38" }}>Patient Dashboard</div>
        <div style={{ fontSize: "14px", color: "#94a3b8" }}>Coming soon — building this next!</div>
      </div>
    </div>
  );
}