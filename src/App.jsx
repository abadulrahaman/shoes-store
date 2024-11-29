import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import MainLayout from './components/MainLayout'
import MenLayout from './components/MenLayout'
import Men from './components/Men'
import WomenLayout from './components/WomenLayout'
import Women from './components/Women'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Cart from './components/Cart'
import { SneakersDetails } from './components/SneakersDetails'
import AllLayout from './components/AllLayout'
import All from './components/All'
import AllDetails from './components/AllDetails'

function App() {

  return (
    <div className='px-28 h-[100vh]'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />

            <Route path="all" element={<AllLayout />}>
              <Route index element={<All />} />
              <Route path="details/:id" element={<AllDetails/>} />
            </Route>

            <Route path="men" element={<MenLayout />}>
              <Route index element={<Men />} />
              <Route path="details/:id" element={<SneakersDetails />} />
            </Route>

            <Route path="women" element={<WomenLayout />}>
              <Route index element={<Women />} />
              <Route path="details/:id" element={<SneakersDetails />} />
            </Route>

            <Route path="details/:id" element={<SneakersDetails />} />

            <Route path='about' element = {<About />}></Route>

            <Route path='contact' element = {<Contact />}></Route>

            <Route path='cart' element = {<Cart/>} ></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
