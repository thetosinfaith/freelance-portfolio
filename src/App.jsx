import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import QuickPicks from './components/OuickPicks/QuickPicks'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
      <Hero/>
      <QuickPicks/>
      </div>
      </div>
  )
}

export default App