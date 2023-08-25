import React from 'react'
import styles from "../styles/Home.module.css"
import bike from '../images/bike.png'
import laptop from '../images/pngwing.png'
import iphone from '../images/Iphone.png'
import my from '../images/my.png'
import bounce from '../images/bounce.png'
import apple from '../images/apple.png'

export default function Features() {
  return (
    <div className={styles.features}>
        <div>
            <p>FEATURES</p>
            <p>SAVE NOW. BUY LATER.<br/> SIMPLE & REALISTIC </p>
            <p>Get what you love and save up over weeks or months to achieve it much lower price. Time & Flexibility on your side.</p>
            <div>
                <button>Get the App</button>
                <a>Learn More</a>
            </div>
        </div>
        <div className={styles.cards}>
            <img src={my} />
            <img src={bounce} />
            <img src={apple}/>
            <div>
                <img src={bike} />
                <div>
                    <p>Bounce Infinity EV</p>
                    <p>Save up for your next Bike <span>⟶</span></p>
                    <p><span>10% returns + </span><span>Flat ₹400 off</span></p>
                </div>
            </div>
            <div>
                <img src={laptop} />
                <div>
                    <p>Lonovo</p>
                    <p>Save up for your next Laptop <span>⟶</span></p>
                    <p><span>10% returns + </span><span>Flat ₹400 off</span></p>
                </div>
            </div>
            <div>
                <img src={iphone} />
                <div>
                    <p>Apple</p>
                    <p>Save up for your next Iphone</p>
                    <p><span>10% returns + </span><span>Flat ₹400 off</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
