import React from "react";

import resumeSvg from "../../assets/resume.svg";

import styles from "./Header.module.css";

import Navbar from "../Navbar/Navbar";

function Header() {
  return (
  
    <div className={styles.container}>
   
      <div className={styles.left}>
        <h1>ResumeHero</h1>
        <p className={styles.heading}>
        Crafting Legendary <span>Resumes</span> for
        </p>
        <p className={styles.heading}>
        Real-Life <span> Heroes</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;
