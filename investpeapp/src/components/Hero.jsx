import React from 'react'
import styles from "../styles/Home.module.css"
import phone from "../images/phone.png"

export default function Hero() {
  return (
    <div className={styles.hero}>
        <h2>Knowledge Based <br/>
Investing & Trading</h2>
<p>Ready-made solutions + Deep Research + Disciplined Investing + Advanced Trading tools</p>
<img src={phone}/>
    </div>
  )
}
