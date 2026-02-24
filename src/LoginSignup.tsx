import { useState, type FormEvent, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { supabase } from './lib/supabase';
import './LoginSignup.css';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [selectedRole, setSelectedRole] = useState('patient');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Check if URL has ?mode=signup
  // Homepage selection between Login/SignUp
  useEffect(() => {
    const mode = searchParams.get('mode');
    if (mode === 'signup') {
      setIsLogin(false);
    } else {
      setIsLogin(true); 
    }
  }, [searchParams]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (isLogin) {
      // Login for all user types (PT, Patient, Admin)
      console.log('Login submitted:', { email });

      // TODO: Add Supabase login
      // const { data, error } = await supabase.auth.signInWithPassword({
      //   email,
      //   password
      // })
    } else {
      // Signup for patients only
      const fullName = formData.get('fullName') as string;
      const confirmPassword = formData.get('confirmPassword') as string;

      // Basic validation
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }

      console.log('Patient signup submitted:', { fullName, email });

      // Save to users table
      const { error } = await supabase
        .from('users')
        .insert({
          email: email,
          password: password,
          full_name: fullName
        });

      if (error) {
        alert(`Signup failed: ${error.message}`);
        return;
      }

      alert('Signup successful! You can now log in.');
      
      // Redirect to login page
      setIsLogin(true);
      navigate('/auth');
    }
  };

  return (
    // Background horseshoes
    // Logo of Gallop to return to Homepage
    <div className="auth-page">
      <div className="floating-horseshoes">
        <img src="/horseshoe-red.png" alt="" className="horseshoe horseshoe-1" />
        <img src="/horseshoe-blue.png" alt="" className="horseshoe horseshoe-2" />
        <img src="/horseshoe-purple.png" alt="" className="horseshoe horseshoe-3" />
        <img src="/horseshoe-green.png" alt="" className="horseshoe horseshoe-4" />
        <img src="/horseshoe-orange.png" alt="" className="horseshoe horseshoe-5" />
        <img src="/horseshoe-yellow.png" alt="" className="horseshoe horseshoe-6" />
        <img src="/horseshoe-pink.png" alt="" className="horseshoe horseshoe-7" />
      </div>

      {/* Logo and Auth Container */}
      <div className="auth-container">
        <div className="auth-header">
          <Link to="/">
            <img src="/gallop_logo_t.png" alt="Gallop Logo" className="auth-logo" />
          </Link>
          <img src="/gallop_text_t.png" alt="Gallop" className="auth-title-logo" />
        </div>

        <div className="auth-card">
          <div className="auth-tabs">
            <button
              className={`auth-tab ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
            >
              <span className="tab-icon">🏇</span>
              Log In
            </button>
            <button
              className={`auth-tab ${!isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(false)}
            >
              <span className="tab-icon">⭐</span>
              Sign Up
            </button>
          </div>

          <div className="auth-form-container">
            <h2 className="auth-form-title">
              {isLogin ? 'Welcome Back!' : 'Join Now!'}
            </h2>
            <p className="auth-form-subtitle">
              {isLogin
                ? 'Ready to continue your journey?'
                : 'Start your rehab today!'}
            </p>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="fullName">
                    <span className="label-icon">👤</span>
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">
                  <span className="label-icon">📧</span>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">
                  <span className="label-icon">🔒</span>
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    <span className="label-icon">🔐</span>
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
              )}


              {!isLogin && (
                 <div className="form-group">
                  <label htmlFor="role">
                    <span className="label-icon">🏅</span>
                    I am a...
                    </label>
                  <select
                  id="role"
                  name="role"
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  required
                >
                  <option value="patient">Patient</option>
                  <option value="pt">Physical Therapist</option>
                  <option value="admin">Administrator</option>
                </select>
              </div>
            )}
                


              {isLogin && (
                <div className="form-options">
                  <label className="remember-me">
                    <input type="checkbox" />
                    <span>Remember me</span>
                  </label>
                  <a href="#" className="forgot-password">Forgot password?</a>
                </div>
              )}

              <button type="submit" className="btn-submit">
                {isLogin ? 'Start Training!' : 'Join Now!'}
              </button>
            </form>

            <p className="toggle-auth">
              {isLogin ? "Don't have an account? " : "Already have an account? "}
              <button onClick={() => setIsLogin(!isLogin)} className="toggle-link">
                {isLogin ? 'Sign up now!' : 'Log in here!'}
              </button>
            </p>
          </div>
        </div>

        <div className="auth-decoration">
          <img src="/horseshoe-blue.png" alt="" className="deco-horseshoe deco-1" />
          <img src="/horseshoe-pink.png" alt="" className="deco-horseshoe deco-2" />
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;