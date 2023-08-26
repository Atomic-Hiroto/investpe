import React from 'react'
import styles from '../styles/Gateway.module.css'
import hand from '../images/hand.png'

export default function Banner() {
  return (
    <div className={styles.banner}>
        <div>
            <div>
            <p>Connect your platform finances now with InvestPe Gateway</p>
            <p>We help brokers, wealth managers, fund managers & other businesses / startups server their customers better with our suite of modern digital investment stack</p>
            <button>Try Investpe Now</button>
            </div>
            <div>
                <img src={hand} />
            </div>
        </div>
    </div>
  )
}
