import React from 'react'
import Ticker from '../components/Ticker'
import Footer from '../components/Footer'
import GateNav from '../components/GateNav'
import GateHero from '../components/GateHero'
import Banner from '../components/Banner'
import Partner from '../components/Partner'

export default function Gateway() {
  return (
    <>
    <Ticker />
    <GateNav />
    <GateHero />
    <Banner />
    <Partner />
    <Footer />
    </>
  )
}
