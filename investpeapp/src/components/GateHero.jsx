import React from 'react'
import styles from '../styles/Gateway.module.css'
import {FaChevronCircleDown} from 'react-icons/fa'
import p from '../images/p.png'

export default function GateHero() {
  return (
    <>
    <div className={styles.hero}>
      <div>
        <p><span>INVESTMENT STACK</span> for India</p>
        <p>Elevate Your Investment Strategy with Our <span>Comprehensive APIs</span></p>
      </div>
      <div>
        <p>Launch financial services in a matter of days. Take your pick from our flexible APIs, SDKs, or ready-to-use screens.</p>
        <p>See our products  <FaChevronCircleDown /></p>
        <button>Contact Us </button>
      </div>
    </div>
    <div className={styles.cards}>
        <div>
        <img src={p} />
          <p>Stocks</p>
        </div>
        <div>
          <img src={p} />
          <p>Mutual Funds</p>
        </div>
        <div>
        <img src={p} />
          <p>Digital Gold</p>
        </div>
    </div>
    </>
  )
}
