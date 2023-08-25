import React from 'react'
import styles from '../styles/Home.module.css'
import investpe from '../images/investpe.png'
import getit from '../images/getit.png'
import facebook from '../images/facebook.png'
import twitter from '../images/twitter.png'
import insta from '../images/insta.png'
import youtube from '../images/youtube.png'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img src={investpe} />
            <div>
                <div>
                    <h2>Contact Us</h2>
                    <p>8089225625</p>
                    <p>contact@chhotastock.com</p>
                </div>
                <div>
                    <h2>Company</h2>
                    <p>About Us</p>
                    <p>Privacy policy</p>
                    <p>Tems and Conditions</p>
                </div>
                <div>
                    <h2>Quick Links</h2>
                    <p>Home</p>
                    <p>Gateway</p>
                    <p>Blog</p>
                </div>
                <div>
                    <h2>Download the App now!</h2>
                    <img src={getit} />
                </div>
            </div>
            <div>
                <h2>Find Us On</h2>
                <div>
                    <img src={facebook} alt="" /><img src={youtube} alt="" /><img src={insta} alt="" /><img src={twitter} alt="" />
                </div>
            </div>
            <div>
                <p>© 2022 Chhotastock Technologies Private Limited. All rights reserved. CIN - U74999WB2012PTC184187 Chhotastock Technologies Private Limited.
                </p>
                <p>Chhotastock Technologies builds platforms & investment products to invest better in Indian investment asset classes.
                    Investing in Stocks/ETFs (Exchange Traded Funds) are subject to market risks. Read all the related documents before investing. Investors should consider all risk factors and consult their financial advisor before investing</p>
                <p>Registered Office: L151, 3rd Floor, CK Pearl, 5th Main Road, HSR Layout Sector 6, Bengaluru, Karnataka - 560102, India</p>
                <p>For any query / feedback / clarifications, email at contact@chhotastock.com</p>
                <p>All Investment ideas, model portfolios & advisory are built by SEBI Registered Investment advisors (RIAs) & Chhotastock only facilitates investments
                    in such baskets, portfolios.</p>
            </div>
        </div>
    )
}
