import React from 'react'
import styles from "../styles/Home.module.css"
import {BsSearch} from 'react-icons/bs'
import investpe from '../images/investpe.png'
import {IoLogInOutline} from 'react-icons/io5'
import {useNavigate} from 'react-router-dom'

export default function HomeNav() {
  let navigate = useNavigate()
  return (
    <div className={styles.nav}>
        <div onClick={()=>{
          navigate("/")
        }}>
            <img src={investpe} />
            <p>INVEST TO PAY. INVEST TO SPEND</p>
        </div>
        <div>
            <span><BsSearch /></span>
            <input type='text' placeholder='Search stocks, ETFs, indices'/>
        </div>
        <div>
        <button onClick={()=>{
          navigate("/gateway")
        }}>
          <IoLogInOutline />
            Login
        </button>
        </div>
    </div>
  )
}
