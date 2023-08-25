import React from 'react'
import Ticker from '../components/Ticker'
import HomeNav from '../components/HomeNav'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Ticker/>
        <HomeNav/>
        <Hero />
        <Features />
        <Footer />
    </>
  )
}
