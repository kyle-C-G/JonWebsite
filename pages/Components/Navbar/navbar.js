import styles from "./navbar.module.css"
import Link from "next/link"
import {useRouter} from 'next/router';

export default function Navbar() {
    let currentRoute = useRouter()
    console.log(currentRoute)
    let homeClass = false
    let portfolioClass = false
    if (currentRoute.asPath == "/") {
      homeClass = true
    }
    else if (currentRoute.asPath == "/Portfolio") {
      portfolioClass = true
    }

    return ( 
        <nav id="navbar">
          <ul>
            <li className={ homeClass ? styles.selectedButton : null}>
              <Link href="/" className={ homeClass ? styles.selectedButton : null}>Home</Link>
            </li>
            <li className={ portfolioClass ? styles.selectedButton : null}>
              <Link className={ portfolioClass ? styles.selectedButton : null} href="/Portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>
    )
  }