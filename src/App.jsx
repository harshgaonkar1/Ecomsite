import React from 'react'
import Navbar from './components/NavBar/Navbar'
import Hero from './components/main/Hero'
import Menues from './components/Menus/Menues'
import Banner from './components/Banner/Banner'
import Onlineshop from './components/OnlineShop/OnlineShop'
import Banner3 from './components/Banner/Banner3'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Menues/>
      <Banner/>
      <Onlineshop/>
      <Banner3/>
      <Footer/>
    </main>
    </>
  )
}

export default App
