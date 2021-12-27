import React from 'react'
import styles from './index.module.css'

function Input ({ ...props }) {
  return <input className={styles.input} type='text' {...props}></input>
}

export default Input
