import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import LoginSignup from './LoginSignup'
import PTDashboard from './PTDashboard'
import AdminDashboard from './AdminDashboard'
import PatientDashboard from './PatientDashboard'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="app"><HomePage /></div>} />
        <Route path="/auth" element={<div className="app"><LoginSignup /></div>} />
        <Route path="/dashboard/pt" element={<PTDashboard />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/patient" element={<PatientDashboard />} />
      </Routes>
    </Router>
  )
}

export default App