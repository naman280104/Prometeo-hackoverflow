import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import SideNav from './components/SideBar'
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">

      <Main />
    </div>
  )
}

export default App;
