import React from "react";
import resumeSvg from "../../assets/resume.svg";
import styles from "./Header.module.css";

function Header(){
    return(
        <div className={styles.container}>
            <div className={styles.left}>
                <p className={styles.heading}>
                    Build your own <span>resume</span> and get shortlisted for your <span>dream job</span>.
                </p>
            </div> 
            <div className={styles.right}>
                <img src={resumeSvg} alt="Resume" />
            </div>
        </div>
    );
}

export default Header;