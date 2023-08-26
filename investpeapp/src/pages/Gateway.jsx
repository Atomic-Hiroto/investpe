import React from 'react'
import Ticker from '../components/Ticker'
import Footer from '../components/Footer'
import GateNav from '../components/GateNav'
import GateHero from '../components/GateHero'
import Banner from '../components/Banner'

export default function Gateway() {
  return (
    <>
    <Ticker />
    <GateNav />
    <GateHero />
    <Banner />
    <Footer />
    </>
  )
}
