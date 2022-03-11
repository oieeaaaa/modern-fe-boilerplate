import { Props } from '.'
import styles from './button.module.scss'

function Button({ children }: Props) {
  return <button className={styles.button}>{children}</button>
}

export default Button
