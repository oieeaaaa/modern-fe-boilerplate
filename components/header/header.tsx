import { useRouter } from 'next/router'
import cn from 'classnames'
import { SearchIcon, BellIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import nav from './nav.json'
import styles from './header.module.scss'

/*
-----------------------------------------------------
Name: Header
Description: Main header
Usage:

```tsx
<Header />
```
-----------------------------------------------------
*/

const Header = () => {
  const router = useRouter()

  return (
    <header
      data-testid="header"
      className={cn(styles.container, styles.header)}
    >
      <div className={styles.header_top}>
        <p className={styles.header_brand}>Modern FE Boilerplate</p>
        <Link href="/search">
          <a className={styles.header_search}>
            <SearchIcon className={styles.header_icon} />
          </a>
        </Link>
        <Link href="/cart">
          <a className={styles.header_cart}>
            <BellIcon className={styles.header_icon} />
          </a>
        </Link>
      </div>
      <nav className={styles.header_nav}>
        {nav.map((navItem) => (
          <Link href={navItem.path} key={navItem.path}>
            <a
              className={cn(styles.header_nav__item, {
                [styles.active]: router.asPath === navItem.path,
              })}
            >
              {navItem.label}
            </a>
          </Link>
        ))}
      </nav>
    </header>
  )
}

export default Header
