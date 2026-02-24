import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './HomePage'
import LoginSignup from './LoginSignup'

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
