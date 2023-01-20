import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import LandingPage from './pages/LandingPage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* <LandingPage /> */}
      <Main/>
    </div>
  )
}

export default App;
