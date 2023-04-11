import React from 'react'
import Banner from '../components/Banner/Banner'
import Category from '../components/Category/Category';
import Selling from '../components/Selling/Selling';
import NewProducts from '../components/NewProducts/NewProducts';
import About from '../components/About/About';


export default function Home() {
  return (
    <div>
      <Banner/>
      <Category/>
      <Selling/>
      <NewProducts/>
      <About/>
    </div>
  )
}
