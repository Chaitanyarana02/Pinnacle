import {FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";


const FooterComponent: FunctionComponent = () => {
  return (
    <footer className={styles.content} >
      <div className={styles.pinnaqleWrapper}>
        <div className={styles.pinnaqle}>Pinnaqle</div>
      </div>
      <div
        className={styles.copyrightPinnaqle}>
        Copyright 2024. Pinnaqle. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterComponent;
