import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'
import BackToTop from '../components/BackToTop/BackToTop'

export default function HomeLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
        <BackToTop/>
    </div>
  )
}
