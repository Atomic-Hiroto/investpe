import React from 'react'
import styles from '../styles/Gateway.module.css'
import investpe from '../images/investpe.png'
import { useNavigate } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'
import { useState } from 'react';
import mf from '../images/mf.png'
import ie from '../images/ie.png'
import dg from '../images/dg.png'
import fd from '../images/fd.png'
import mr from '../images/mr.png'
import hp from '../images/hp.png'

export default function GateNav() {
    let navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={styles.nav}>
            <div >
                <img src={investpe} onClick={() => {
                    navigate("/")
                }} />
                <button>Gateway ⬤</button>
            </div>
            <div>
                <div className={styles.dropdown}>
                    <p onClick={toggleDropdown} onMouseEnter={() => {
                        setIsOpen(true)
                    }}
                    >Products  <FaChevronDown /></p>
                    {isOpen &&
                        <div class={styles['dropdown-content']}>
                            <div>
                                <h2>INVESTMENTS</h2>
                                <div>
                                        <img src={mf} />
                                        <div>
                                            <p>Mutual Funds</p>
                                            <p>E2E infrastructure for mutual fund investing</p>
                                        </div>
                                </div>
                                <div>
                                    <img src={ie} />
                                    <div>
                                        <p>Indian Equity</p>
                                        <p>Ready-made stock baskets with major broker integrations</p>
                                    </div>
                                </div>
                                <div>
                                <img src={dg} />
                                    <div>
                                        <p>Digital Gold</p>
                                        <p>Allow your users to buy & sell digital gold</p>
                                    </div>
                                </div>
                                <div>
                                <img src={fd} />
                                    <div>
                                        <p>Fixed Deposits</p>
                                        <p>Book FDs in one-click without opening a bank account</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2>DATA</h2>
                                <div>
                                <img src={mr} />
                                    <div>
                                        <p>Market Research</p>
                                        <p>Deep-tech stock research & analysis</p>
                                    </div>
                                </div>
                                <div>
                                    <img src={hp} />
                                    <div>
                                        <p>Historical Performance</p>
                                        <p>Multi timeframe historical data for stocks, mutual funds & digital gold</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <p>AboutUs</p>
            </div>
        </div>
    )
}
