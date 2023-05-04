import React from "react";
import styles from "./Nav.module.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.productName}>
          <h1>TICKITS.</h1>
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link to="/"> Home</Link>
            </li>
            <li>
              <Link to="/events"> Events</Link>
            </li>
            <li>
              <Link to="/about"> About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className={styles.reg}>
          <div className={styles.login}>
            <h2>
              <a href="#">Log In</a>
            </h2>
          </div>
          <div className={styles.create}>
            <a href="#">Create Event</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
