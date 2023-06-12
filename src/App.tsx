import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
   <div className="App">
    <div className="container">
      <h1>Expense Tracker</h1>
    </div>
   </div>
  )
}

export default App
