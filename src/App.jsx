import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Navbar'
import Hero from './components/Hero'
import Project from './pages/Porject'
import Services from './pages/Services'
import Works from './pages/Works'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Header/>
<Hero/>
<Services/>
<Project/>
<Works/>
<Contact/>
   </>
  )
}

export default App
