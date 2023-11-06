import Link from 'next/link'
import styles from './Navbar.module.css'
import { ActiveLink } from './ActiveLink'

const pages = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const NavBar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        pages.map(({text, href})=>(
          <ActiveLink key={text} text={text} href={href}/>
        ))
      }
    </nav>
  )
}
