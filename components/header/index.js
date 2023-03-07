import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faFilter } from "@fortawesome/free-solid-svg-icons";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faBars} className={styles.icon} />
      <span>Pokedex</span>
      <FontAwesomeIcon icon={faFilter} className={styles.icon} />
    </div>
  );
}
