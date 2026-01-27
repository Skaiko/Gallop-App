import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          {/* Logo + title (RHS) */}
          <div className="header-left">
            <img
              src="/gallop_logo_t.png"
              alt="Gallop Logo"
              className="header-logo"
            />
            <div className="header-text">
              <img
                src="/gallop_text_t.png"
                alt="Gallop"
                className="header-title-logo"
              />
            </div>
          </div>

          {/* Login + Sign Up Buttons (LHS) */}
          <div className="header-buttons">
            <button className="btn-login">Log In</button>
            <button className="btn-signup">Sign Up</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-decoration hero-star-top">⭐</div>
        <div className="hero-decoration hero-muscle-bottom">💪</div>

        <h2>Transform Your Physical Therapy Practice</h2>
        <p>
          Streamline workout assignments, improve patient engagement,
          and simplify practice management ✨
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="features">
        <div className="features-title">
          <h2>Built for Everyone in Physical Therapy</h2>
        </div>

        <div className="features-grid">
          {/* For PTs Card */}
          <div className="feature-card card-blue">
            <div className="card-decoration">⭐</div>
            <div className="feature-icon icon-blue">🩺</div>
            <h3>For Physical Therapists</h3>
            <ul>
              <li>⭐ Manage patient caseloads efficiently</li>
              <li>⭐ Create custom workout programs</li>
              <li>⭐ Assign exercises with ease</li>
              <li>⭐ Track patient progress</li>
            </ul>
          </div>

          {/* For Patients Card */}
          <div className="feature-card card-pink">
            <div className="card-decoration">⭐</div>
            <div className="feature-icon icon-pink">💪</div>
            <h3>For Patients</h3>
            <ul>
              <li>⭐ Access workouts anytime, anywhere</li>
              <li>⭐ Clear exercise instructions</li>
              <li>⭐ Stay connected with your PT</li>
              <li>⭐ Track your recovery journey</li>
            </ul>
          </div>

          {/* For Administrators Card */}
          <div className="feature-card card-orange">
            <div className="card-decoration">⭐</div>
            <div className="feature-icon icon-orange">⚙️</div>
            <h3>For Administrators</h3>
            <ul>
              <li>⭐ Oversee multiple facilities</li>
              <li>⭐ Manage user accounts</li>
              <li>⭐ System-wide analytics</li>
              <li>⭐ Streamline operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-copyright">© 2026 Team H.O.R.S.E ⭐</p>
        <p className="footer-tagline">Transforming physical therapy, one workout at a time 💪</p>
      </footer>
    </div>
  )
}

export default App