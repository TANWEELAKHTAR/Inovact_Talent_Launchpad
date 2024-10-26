import React from 'react'
import Hero from './components/pages/Hero'
import NavBar from './components/other/NavBar'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import Page4 from './components/pages/Page4'
import Page5 from './components/pages/Page5'
import Contact from './components/pages/Contact'
import Footer from './components/pages/Footer'

const App = () => {
  return (
    <main className='relative'>
      <NavBar />
      <Hero />
      <Page2/>
      <Page3/>
      <Page4/>
      <Page5/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
