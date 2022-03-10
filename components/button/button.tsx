import React from 'react'
import styles from './button.module.scss'

type Props = {
  children: React.ReactNode
}

function Button({ children }: Props) {
  return <button className={styles.button}>{children}</button>
}

export default Button
