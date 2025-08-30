import { useState } from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
 

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Landing/>
   </>
  )
}

export default App
