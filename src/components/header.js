import { Link } from "gatsby"
import * as React from "react"
import data from "../data.json"
import * as styles from "./index.module.css"

const Header = () => {
  const orderLink='https://www.grubhub.com/restaurant/curiosity-by-intrinsic-161-midland-ave-kearny/4198872';
  return(
    <div className={styles.home__container}>
      <div className={styles.home__text__container}>
        <h1 className={styles.home__title}>{data.restaurant.name}</h1>
        <h2 className={styles.home__title__sub}>Asian Culinary</h2>
        <p className={styles.home__title__sub2}>Exploring the Boundaries of Food Fusion</p>
      </div>
      <div className={styles.home__button__container}>
        <button className={styles.button__Order}>
          <a className={styles.button__Text} href={orderLink}>
            Order Online
          </a>
        </button>
        <button className={styles.button__Menu}>
          <Link className={styles.button__Text} to="#menu">
            Menu
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Header
