import React from 'react'
import styles from '../styles/Gateway.module.css'
import jupiter from '../images/jupiter.png'
import siply from '../images/siply.png'
import equitas from '../images/equitas.png'
import liquiloans from '../images/liquiloans.png'
import lendbox from '../images/lendbox.png'
import ampi from '../images/ampi.png'
import upstox from '../images/upstox.png'
import angel from '../images/angel.png'
import kotak from '../images/kotak.png'


export default function Partner() {
  return (
    <div className={styles.partner}>
        <div>
            <div>
            <p>
            Some partners who make InvestPe products possible—
            </p>
            </div>
            <div>
                <img src={kotak} />
                <img src={angel} />
                <img src={upstox} />
                <img src={ampi} />
                <img src={lendbox} />
                <img src={liquiloans} />
                <img src={equitas} />
            </div>
        </div>
        <div>
            <div>
            <p>
            ...and a few of the businesses building some incredible solutions with InvestPe
            </p>
            </div>
            <div>
                <div>
                <img src={siply}/>
                </div>
                <div>
                <img src={jupiter}/>
                </div>
            </div>
        </div>
    </div>
  )
}
