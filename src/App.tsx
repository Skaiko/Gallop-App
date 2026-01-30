import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import LoginSignup from './LoginSignup'

function HomePage() {
  return (
    <>
      <header className="header">
        <div className="header-content">
          {/* Logo + title (RHS) */}
          <div className="header-left">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
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
            </Link>
          </div>

          {/* Login + Sign Up Buttons (LHS) */}
          <div className="header-buttons">
            <Link to="/auth">
              <img src="/login-button.png" alt="Log In" className="btn-login-img" />
            </Link>
            <Link to="/auth?mode=signup">
              <img src="/signup-button.png" alt="Sign Up" className="btn-signup-img" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        {/* Floating Horseshoes Background */}
        <div className="floating-horseshoes">
          <img src="/horseshoe-red.png" alt="" className="horseshoe horseshoe-1" />
          <img src="/horseshoe-blue.png" alt="" className="horseshoe horseshoe-2" />
          <img src="/horseshoe-purple.png" alt="" className="horseshoe horseshoe-3" />
          <img src="/horseshoe-green.png" alt="" className="horseshoe horseshoe-4" />
          <img src="/horseshoe-orange.png" alt="" className="horseshoe horseshoe-5" />
          <img src="/horseshoe-yellow.png" alt="" className="horseshoe horseshoe-6" />
          <img src="/horseshoe-green.png" alt="" className="horseshoe horseshoe-7" />
          <img src="/horseshoe-orange.png" alt="" className="horseshoe horseshoe-8" />
          <img src="/horseshoe-yellow.png" alt="" className="horseshoe horseshoe-9" />
        </div>

        <h2>Transform Your Physical Therapy Practice</h2>
        <p>
          Streamline workout assignments, improve patient engagement,
          and simplify practice management ✨
        </p>
        <div className="hero-buttons">
          <Link to="/auth">
            <button className="btn-primary">Get Started</button>
          </Link>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      {/* Featured Section */}
      <section className="features">

        <div className="floating-horseshoes">
          <img src="/horseshoe-blue.png" alt="" className="horseshoe horseshoe-10" />
          <img src="/horseshoe-purple.png" alt="" className="horseshoe horseshoe-11" />
          <img src="/horseshoe-orange.png" alt="" className="horseshoe horseshoe-12" />
          <img src="/horseshoe-red.png" alt="" className="horseshoe horseshoe-13" />
          <img src="/horseshoe-green.png" alt="" className="horseshoe horseshoe-14" />
          <img src="/horseshoe-yellow.png" alt="" className="horseshoe horseshoe-15" />
        </div>

        <div className="features-title">
          <h2>Built for Everyone in Physical Therapy</h2>
        </div>

        <div className="features-grid">
          {/* For PTs Card */}
          <div className="feature-card card-blue">
            <div className="card-decoration">
              <img
                src="/Horseshoe_blue.png"
                alt="decoration"
                className="card-decoration-img"
              />
            </div>
            <div className="feature-icon icon-blue">
              <img src="/uma_pt.png" alt="pt_uma" style={{ width: '60px', height: '65px' }} />
            </div>
            <h3>For Physical Therapists</h3>
            <ul>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                Manage patient caseloads efficiently</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                Create custom workout programs</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                Assign exercises with ease</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                Track patient progress</li>
            </ul>
          </div>

          {/* For Patients Card */}
          <div className="feature-card card-pink">
            <div className="card-decoration">
              <img
                src="/Horseshoe_pink.png"
                alt="decoration"
                className="card-decoration-img"
              />
            </div>
            <div className="feature-icon icon-pink">
              <img src="/uma_p.png" alt="p_uma" style={{ width: '60px', height: '65px' }} />
            </div>
            <h3>For Patients</h3>
            <ul>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                 Access workouts anytime, anywhere</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                 Clear exercise instructions</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                 Stay connected with your PT</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                 Track your recovery journey</li>
            </ul>
          </div>

          {/* For Administrators Card */}
          <div className="feature-card card-orange">
            <div className="card-decoration">
              <img
                src="/Horseshoe_yellow.png"
                alt="decoration"
                className="card-decoration-img"
              />
            </div>
            <div className="feature-icon icon-orange">
              <img src="uma_a.png" alt="a_uma" style={{ width: '50px', height: '60px' }} />
            </div>
            <h3>For Administrators</h3>
            <ul>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                 Oversee multiple facilities</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} /> 
                 Manage user accounts</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                 System-wide analytics</li>
              <li> <img src="/carrot.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} />
                 Streamline operations</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-copyright">© 2026 Team H.O.R.S.E 
          <img src="/gallop_logo_t.png" alt="" style={{ width: '50px', height: '50px', marginRight: '0px', verticalAlign: 'middle' }} /></p>
        <p className="footer-tagline">Transforming physical therapy, one workout at a time 💪</p>
      </footer>
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App