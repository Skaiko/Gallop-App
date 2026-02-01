import React from "react";

/**
 * Types
 */
interface UserProfile {
  accountName: string;
  email: string;
  accountNumber: string;
  bio: string;
}

/**
 * Mock data (replace with API / context later)
 */
const mockUser: UserProfile = {
  accountName: "Jane Doe",
  email: "jane.doe@example.com",
  accountNumber: "ACC-102938",
  bio: "Brief Description of the user's profile. This can include interests, background, or any other relevant information as well as details about the patient's health a personal trainer would need to know.",
};

/**
 * Component
 */
const ProfilePage: React.FC = () => {
  const { accountName, email, accountNumber, bio } = mockUser;

  return (
    <main style={styles.container}>
      <section style={styles.card}>
        <h1 style={styles.heading}>Profile</h1>

        <div style={styles.field}>
          <label style={styles.label}>Account Name</label>
          <span>{accountName}</span>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Email</label>
          <span>{email}</span>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Account Number</label>
          <span>{accountNumber}</span>
        </div>

        <div style={styles.field}>
          <label style={styles.label}>Bio</label>
          <p style={styles.bio}>{bio}</p>
        </div>
      </section>

      <section style={styles.card}>
        <h2 style={styles.subheading}>Settings</h2>

        <div style={styles.settingsItem}>
          <button style={styles.button}>Edit Profile</button>
        </div>

        <div style={styles.settingsItem}>
          <button style={styles.button}>Change Password</button>
        </div>

        <div style={styles.settingsItem}>
          <button style={{ ...styles.button, ...styles.danger }}>
            Delete Account
          </button>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;

/**
 * Basic inline styles (safe default for boilerplate)
 */
const styles: Record<string, React.CSSProperties> = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "1.5rem",
  },
  heading: {
    marginBottom: "1rem",
  },
  subheading: {
    marginBottom: "1rem",
  },
  field: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.25rem",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: 600,
    color: "#555",
  },
  bio: {
    margin: 0,
    lineHeight: 1.5,
  },
  settingsItem: {
    marginBottom: "0.75rem",
  },
  button: {
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
    background: "#fff",
    cursor: "pointer",
  },
  danger: {
    color: "#b00020",
    borderColor: "#b00020",
  },
};
