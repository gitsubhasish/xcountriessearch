import React from "react";
import styles from "./App.module.css";

function CountryCard({ cnt }) {
  return (
    <div key={cnt.name.common} className={styles.countryCard}>
      <img
        className="card-img-top"
        src={cnt.flags.png}
        alt={cnt.name.common}
        style={{ height: 85 }}
      />
      <div className="card-body">
        <p className={styles.card_text}>{cnt.name.common}</p>
      </div>
    </div>
  );
}

export default CountryCard;
