import React from "react";
import styles from "./App.module.css";

function CountryCard({ cnt }) {
  return (
    <div key={cnt.code} className={styles.countryCard}>
      <img
        className="card-img-top"
        src={cnt.flag}
        alt={cnt.abbr}
        style={{ height: 85 }}
      />
      <div className="card-body">
        <p className={styles.card_text}>{cnt.name}</p>
      </div>
    </div>
  );
}

export default CountryCard;
