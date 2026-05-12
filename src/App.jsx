import { useState } from 'react'
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  // State untuk simulasi login sederhana
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  )
}

export default App