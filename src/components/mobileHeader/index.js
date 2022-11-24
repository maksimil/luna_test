import React from "react";

import styles from "./mobileHeader.module.scss";

function MobileHeader() {
  return (
    <mobileHeader>
      <div className={styles.mobile_header}>
        <button className={styles.menu_burger_button}>
          <img src="./img/burger.svg" alt=""/>
        </button>
      </div>
    </mobileHeader>
  );
}
export default MobileHeader;
