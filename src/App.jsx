import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Navbar'
import Hero from './components/Hero'
import Services from './pages/services'
import Porject from './pages/Porject'
import Project from './pages/Porject'
import Works from './pages/Works'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Hero/>
<Services/>
<Project/>
<Works/>
    </>
  )
}

export default App
