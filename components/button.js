import React from 'react'
import styles from '../styles/button.module.css'

export default function Button() {
  return (
    
        <button className={styles.btn} onClick={() => {
        console.log("Button")
        }}>button</button>
  )
}
