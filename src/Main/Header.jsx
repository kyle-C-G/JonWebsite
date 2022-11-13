import styles from "./header.module.css";
import Logo from "../assets/Logo.svg";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function openMenu() {
    setMenuOpen(true);
    return;
  }
  
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
        <img src={Logo} className={styles.logo} alt="" />
      </div>
      <div onClick={openMenu} className={styles.imageContainer}>
        <svg
          className={styles.BurgerMenu}
          xmlns="http://www.w3.org/2000/svg"
          width="82.927"
          height="55.525"
          viewBox="0 0 82.927 55.525"
        >
          <g
            id="Group_40"
            data-name="Group 40"
            transform="translate(-1522.5 -130.5)"
          >
            <g
              id="Group_39"
              data-name="Group 39"
              transform="translate(1522.5 130.5)"
            >
              <path
                id="Line_4"
                data-name="Line 4"
                d="M71.74,2.874H-1.813A4.687,4.687,0,0,1-6.5-1.813,4.687,4.687,0,0,1-1.813-6.5H71.74a4.687,4.687,0,0,1,4.687,4.687A4.687,4.687,0,0,1,71.74,2.874Z"
                transform="translate(6.5 6.5)"
              />
              <path
                id="Line_5"
                data-name="Line 5"
                d="M71.74,2.874H-1.813A4.687,4.687,0,0,1-6.5-1.813,4.687,4.687,0,0,1-1.813-6.5H71.74a4.687,4.687,0,0,1,4.687,4.687A4.687,4.687,0,0,1,71.74,2.874Z"
                transform="translate(6.5 29.575)"
              />
              <path
                id="Line_6"
                data-name="Line 6"
                d="M71.74,2.874H-1.813A4.687,4.687,0,0,1-6.5-1.813,4.687,4.687,0,0,1-1.813-6.5H71.74a4.687,4.687,0,0,1,4.687,4.687A4.687,4.687,0,0,1,71.74,2.874Z"
                transform="translate(6.5 52.651)"
              />
            </g>
          </g>
        </svg>
      </div>
    </header>
  );
}

export default Header;
