import { useState } from 'react'
import './App.css'
import College_table from './Components/CollegeTable/College_table'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <College_table />
    </>
  )
}

export default App
