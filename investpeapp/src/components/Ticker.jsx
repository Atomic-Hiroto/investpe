import React from 'react'
import styles from "../styles/Home.module.css"
export default function Ticker() {
  return (
    <div className={styles.ticker}>
            <div className={styles.arrow}>
                {"<"}
            </div>
            <div className={styles.tickeritems}>
                <div>
                    <span>ANK </span>43,851.05 <span className={styles.red}>▼ 0.09%</span>
                </div>
                <div>
                    <span>BAJFINANCE </span>6,862.10 <span className={styles.red}>▼ 0.88%</span>
                </div>
                <div>
                    <span>BHARATIARTL </span>856.25 <span className={styles.red}>▼ 0.05%</span>
                </div>
                <div>
                    <span>HDFCBANK </span>1,590.75 <span className={styles.red}>▼ 0.41%</span>
                </div>
                <div>
                    <span>HINDUNIVR </span>2,554.75 <span className={styles.green}>▲ 0.45%</span>
                </div>
                <div>
                    <span>INDIGO </span>2,454.39 <span className={styles.red}>▼ 0.22%</span>
                </div>
                <div>
                    <span>ITC </span>441.65 <span className={styles.green}>▲ 0.15%</span>
                </div>
                <div>
                    <span>MARUTI </span>9,456.05 <span className={styles.green}>▲ 0.86%</span>
                </div>
            </div>
            <div class={styles.arrow}>
                {">"}
            </div>
        </div>
  )
}
