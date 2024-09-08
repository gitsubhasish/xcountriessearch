import React from "react";
import "./App.css";

function CountryCard({ cnt }) {
  return (
    <div key={cnt.name.common} className="countryCard">
      <img
        className="card-img-top"
        src={cnt.flags.png}
        alt={cnt.name.common}
        style={{ height: 85 }}
      />
      <div className="card-body">
        <h2>
          <span>
            <p className="card_text">{cnt.name.common}</p>
          </span>
        </h2>
      </div>
    </div>
  );
}

export default CountryCard;
