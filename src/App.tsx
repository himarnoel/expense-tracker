import { useState } from 'react'

import './App.css'
import Graph from './Components/Graph';

function App() {
  const [count, setCount] = useState<number>(0)

  return (
   <div className="App">
    <div className="container mx-auto max-w-6xl shadow-lg">
      <h1 className='text-4xl py-8 mb-10 bg-slate-800 text-white rounded'>Expense Tracker</h1>
     
    {/* grid cols */}
    <div className="grid md:grid-cols-2 gap-4"></div>

    {/* Graphs */}
    <Graph />
    </div>
   </div>
  )
}

export default App
