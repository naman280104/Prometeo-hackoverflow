import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SignUpPage />
    </div>
  )
}

export default App;
