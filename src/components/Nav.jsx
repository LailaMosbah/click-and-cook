import React from "react";
import styles from "../styles/nav.module.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const navigate = useNavigate();
  return (
    <div className={styles.nav}>
      <span className={styles.icon} onClick={() => navigate("/")}>
        😋 Click & Cook
      </span>
    </div>
  );
}
