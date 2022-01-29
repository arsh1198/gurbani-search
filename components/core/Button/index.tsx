import React from 'react'
import styles from './index.module.css'

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, React.AriaAttributes  {}

const Button = ({ children, ...rest }: Props) => {
  return (
    <button className={styles.button} {...rest}>
      {children}
    </button>
  )
}

export default Button
