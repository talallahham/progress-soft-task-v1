import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <section className={styles.nav}>
      <Link to={"/"}>Save A Deal</Link>
      <Link to={"/show"}>Show Saved Deals</Link>
    </section>
  );
};

export default Nav;
